const item = [
    {id:1, label:"Home", href: '/'},
    {id:2, label:"Destination", href: '/destination'},
    {id:3, label:"Blog", href: '/blog'},
    {id:4, label:"contact me", href: '/'},
    {id:5, label:"privacy & policy", href: '/'},
    
]

const NavbarSearchItem = () => {
    return(
        <ul className="flex items-center gap-6">
            {item.map((item)=> (
                <li key={item.id}>
                    <a href={item.href} className="text-neutral-800 text-xs">{item.label}</a>
                </li>
            ))}
        </ul>
    )
}
export default NavbarSearchItem