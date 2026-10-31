import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from "@ui/sidebar"
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar"

export function AppsSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b">
        <Avatar>
          <AvatarImage src="/icon.png" />
          <AvatarFallback>TD</AvatarFallback>
        </Avatar>
      </SidebarHeader>
      <SidebarContent>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ad similique dolor quos possimus doloribus maxime fugit perferendis aut, necessitatibus, nobis sunt? Repudiandae rem eveniet consectetur praesentium esse quaerat adipisci culpa expedita sed reiciendis sint sit molestiae nihil modi voluptatem vero sunt, porro inventore voluptate at sapiente! Dolor, officia nesciunt cum similique rem facere deserunt laboriosam ea, fugit distinctio ad molestiae quibusdam sapiente? Neque unde
          impedit aut accusamus libero atque quibusdam nostrum harum perspiciatis amet, assumenda eius ullam, numquam doloribus! Fuga ea repellat ab in dolor cum molestias autem amet incidunt libero cupiditate vero et aut provident aliquam tempora suscipit, repellendus temporibus saepe iste. Asperiores officia, quasi soluta iusto impedit blanditiis, ullam, ex ab placeat nemo tempora repellendus illum. Eaque, quod molestiae rerum non odio corrupti repellat error exercitationem labore officiis id
          eos ab? Est, harum, ex architecto atque sequi dolor tempora, aliquid expedita numquam quam ad illo facilis corporis inventore tempore hic minima saepe delectus quaerat aliquam. Fugit beatae minima, nobis, molestiae delectus ut nesciunt eos, itaque sed asperiores veniam dolores architecto magnam ratione quidem aliquid dolorem officia possimus. Libero sunt laudantium tempore, ad ex in qui sint aliquam vitae cupiditate iusto quisquam dolore doloremque magnam enim iure fugit odio dolores
          illo, ipsam officiis. Consectetur nobis ab soluta sapiente! Repellat aliquam expedita possimus commodi, eligendi dignissimos eos iusto praesentium necessitatibus ducimus doloremque deserunt sequi repellendus. Quis dignissimos doloremque fugiat ab rerum blanditiis quasi aspernatur tenetur, libero dolorem fuga velit temporibus officia necessitatibus quas accusamus, cum illum in totam ullam.
        </p>
      </SidebarContent>
      <SidebarFooter className="border-t">
        <Avatar>
          <AvatarImage />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
      </SidebarFooter>
    </Sidebar>
  )
}
