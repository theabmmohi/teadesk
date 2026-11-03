import type { ChangeEvent, SubmitEvent } from "react"

import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet, FieldTitle } from "@ui/field"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@ui/popover"
import { RadioGroup, RadioGroupItem } from "@ui/radio-group"
import { setProfile, useAuth } from "@util/auth"
import { supabase } from "@util/supabase"
import { Textarea } from "@ui/textarea"
import { Calendar } from "@ui/calendar"
import { Navigate } from "react-router"
import { Button } from "@ui/button"
import { Input } from "@ui/input"
import { useState } from "react"
import { toast } from "sonner"

const accountTypes = [
  { value: "learner", title: "Learner", description: "I'm learning with a mentor" },
  { value: "mentor", title: "Mentor", description: "I run classes and keep track of my students" }
]

export function Component() {
  const user = useAuth((s) => s.user)
  const profile = useAuth((s) => s.profile)

  const [form, setForm] = useState({ name: "", type: "", phone: "", dob: "", address: "", note: "" })
  const [dobOpen, setDobOpen] = useState(false)
  const [saving, setSaving] = useState(false)

  const selectedDob = form.dob ? new Date(`${form.dob}T00:00:00`) : undefined

  const update = (key: keyof typeof form) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((prev) => ({ ...prev, [key]: event.target.value }))

  async function setup(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!user) return

    const { type, dob } = form
    const name = form.name.trim()
    const phone = form.phone.trim()
    const address = form.address.trim()
    const note = form.note.trim()

    if (type !== "mentor" && type !== "learner") return toast.error("Choose your account type")
    if (!name || !phone || !address || !dob) return toast.error("Fill in all required fields")

    setSaving(true)
    const { data, error } = await supabase
      .from("profiles")
      .insert({ id: user.id, name, type, phone, dob, address, note: note || null })
      .select()
      .single()
    setSaving(false)

    if (error) return toast.error(error.message)
    setProfile(data)
  }

  if (!user) return <Navigate to="/login" replace />
  if (profile) return <Navigate to="/" replace />

  return (
    <Card className="max-w-sm m-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Set up your profile</CardTitle>
        <CardDescription>Tell us a bit about yourself to finish creating your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={setup}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Full name</FieldLabel>
              <Input id="name" autoComplete="name" maxLength={50} value={form.name} onChange={update("name")} required />
            </Field>
            <FieldSet>
              <FieldLegend variant="label">I am a</FieldLegend>
              <RadioGroup value={form.type} onValueChange={(value) => setForm((prev) => ({ ...prev, type: value }))} required>
                {accountTypes.map((option) => (
                  <FieldLabel key={option.value} htmlFor={`type-${option.value}`}>
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>{option.title}</FieldTitle>
                        <FieldDescription>{option.description}</FieldDescription>
                      </FieldContent>
                      <RadioGroupItem id={`type-${option.value}`} value={option.value} />
                    </Field>
                  </FieldLabel>
                ))}
              </RadioGroup>
              <FieldDescription>
                You <span className="font-bold">can't</span> change this later
              </FieldDescription>
            </FieldSet>
            <Field>
              <FieldLabel htmlFor="phone">Phone</FieldLabel>
              <Input id="phone" type="tel" autoComplete="tel" maxLength={25} value={form.phone} onChange={update("phone")} required />
            </Field>
            <Field>
              <FieldLabel htmlFor="date">Date of birth</FieldLabel>
              <Popover open={dobOpen} onOpenChange={setDobOpen}>
                <PopoverTrigger
                  render={
                    <Button variant="outline" id="date" className="justify-start font-normal">
                      {selectedDob
                        ? selectedDob.toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                          })
                        : "Select date"}
                    </Button>
                  }
                />
                <PopoverContent className="w-auto overflow-hidden p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={selectedDob}
                    defaultMonth={selectedDob}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setForm((prev) => ({
                        ...prev,
                        dob: date ? `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}` : ""
                      }))
                      setDobOpen(false)
                    }}
                  />
                </PopoverContent>
              </Popover>
            </Field>
            <Field>
              <FieldLabel htmlFor="address">Address</FieldLabel>
              <Textarea id="address" autoComplete="street-address" maxLength={250} rows={2} value={form.address} onChange={update("address")} required />
            </Field>
            <Field>
              <FieldLabel htmlFor="note">Note (optional)</FieldLabel>
              <Textarea id="note" maxLength={500} rows={3} value={form.note} onChange={update("note")} />
            </Field>
            <Field>
              <Button type="submit" processing={saving}>
                Create profile
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  )
}
