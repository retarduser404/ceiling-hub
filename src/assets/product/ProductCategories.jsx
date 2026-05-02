export default function ProductCategories(){

const categories=[
"GYPSUM BOARDS",
"CEILING TILES",
"INSULATION MATERIALS",
"SPECIALTY BOARDS",
"ROCKWOOL",
"GLASSWOOL",
"PVC LAMINATED",
"ARMSTRONG SYSTEMS"
]

return(

<section className="bg-darkSoft border-t border-gray-800">

<div className="container-width py-6 flex flex-wrap gap-10 text-sm text-gray-400">

{categories.map((cat,i)=>(
<span key={i} className="flex items-center gap-2">

<span className="w-2 h-2 bg-accent rounded-full"/>

{cat}

</span>
))}

</div>

</section>

)

}