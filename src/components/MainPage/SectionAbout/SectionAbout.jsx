import React from 'react'
import './SectionAbout.css'

import close from '../Section/images/cloIcon.svg'

export default function SectionAbout () {
  
    function repeats(more) {
		more.children[0].children[0].classList.remove('back')
		more.children[2].children[0].classList.remove('back')
		more.children[3].children[0].classList.remove('back')
		more.children[4].children[0].classList.remove('back')
		more.children[5].children[0].classList.remove('back')
		more.children[6].children[0].classList.remove('back')
	}
    function arrow() {

        const more = document.getElementById('wrapper')
        const about = document.getElementById('section-about')
        document.getElementById('logo_mavqut').style.display = 'block'
        about.classList.remove('section-about-ani')
        document.getElementById('navbar-more').style.display = 'block'
        document.getElementById('navbar-footer').classList.remove('navbar-fade')
      document.getElementById('navbar-foot').classList.remove('navbar-fade')

        let logo_text = document.getElementById('logo_text');
        let logo_mavqut = document.getElementById('logo_mavqut')
        let logo_box = document.getElementById('logo_box')
		logo_text.classList.remove('fadeOutLogoText');
		logo_box.classList.remove('boxFade')
		logo_mavqut.classList.remove('scalingLogo');
        
	    document.getElementById('navbar-language').classList.remove('navbar-fade')
        more.children[2].children[0].classList.remove('about-c')
        more.children[4].children[0].classList.remove('about-c')
        more.children[5].children[0].classList.remove('about-c')
        more.children[6].children[0].classList.remove('about-c')
        
        repeats(more)
        
        
    }
    return (
        <>
        <div className="section-about" id="section-about">
         <div onClick={arrow}><img className="close" src={close} alt="close"/></div>
            <div className="section-body">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime soluta deserunt, totam amet beatae ut similique distinctio corporis repellat doloribus facilis nesciunt porro ad. Excepturi dolor illum pariatur perspiciatis autem impedit. Excepturi aspernatur, sequi vero ipsum, doloribus dicta fugiat accusamus commodi minima ducimus, atque vitae voluptatum cupiditate dolores aliquam ipsa adipisci ea sed id expedita nulla reprehenderit delectus. Esse, asperiores nemo temporibus quod eos dicta, eveniet ipsam distinctio sint velit aut quos voluptate consectetur nulla impedit rem odio qui ea dolor! Est mollitia eum architecto dolores ducimus iste. Earum provident aspernatur soluta ipsa deleniti quam officiis accusamus eveniet sapiente quibusdam laudantium labore tempora a expedita quis ducimus iure, debitis ut eaque hic delectus consequuntur quasi non? Odit maxime consequatur voluptas, mollitia dicta ut quas molestias eius eveniet distinctio! Et architecto porro, illo soluta voluptates saepe ducimus obcaecati aut harum, cupiditate, repellat suscipit! Corrupti consectetur nulla vitae repudiandae vel eveniet magnam neque suscipit, necessitatibus veritatis ab, quo deleniti. Quo harum corporis officia est alias iste. Necessitatibus quo neque, molestias molestiae dignissimos esse laboriosam, repudiandae quae soluta nisi illum cupiditate animi repellendus assumenda nostrum minima veritatis consequatur cum perspiciatis, dicta facilis nobis omnis? Tempore cum ad eos repellendus inventore quas, sunt architecto excepturi dolorum repellat eum doloremque beatae voluptatem sed officia possimus iusto dolorem deleniti! Dolorum ullam laudantium consectetur officiis nihil quaerat odit quos nemo, quas velit officia optio facere aperiam assumenda ipsam animi ab omnis aut error nostrum dolor facilis numquam. Tenetur porro asperiores temporibus eius possimus in expedita veniam ea repellendus odio ipsam ad commodi, error, doloremque dolor atque aliquam deleniti veritatis maxime mollitia ducimus quam. Reprehenderit quasi, pariatur id suscipit fuga laborum rem veritatis minus corrupti officiis nisi labore eligendi eius amet debitis explicabo tempora necessitatibus incidunt saepe a ipsam! Dolores nulla molestiae accusamus, aliquid voluptatem minima iste sed vitae laborum quos vero dolore maiores reprehenderit, libero dolor quas earum aliquam assumenda ut, ducimus culpa adipisci eos iure placeat. Quos doloribus perspiciatis, perferendis maiores amet veritatis provident voluptatum asperiores adipisci pariatur facilis itaque quo dignissimos eligendi, consequatur vitae. Ad incidunt, sequi inventore quam provident harum architecto blanditiis ex laudantium reiciendis tempore dolorum vel saepe eaque sit rerum. Facere necessitatibus ullam odio, eum alias molestiae, architecto nam et pariatur, fuga repellendus porro dolorum laborum reiciendis quidem voluptatibus nihil saepe quae? Soluta nisi aliquam doloribus hic necessitatibus impedit accusamus tempora quisquam illo sequi, maxime eveniet ratione illum unde atque quas corporis pariatur nemo! Dolorum quisquam explicabo porro voluptatum at unde praesentium ipsa. Sit aliquid ab dignissimos sapiente odit consequatur laborum ducimus eligendi non, quod quisquam labore laudantium doloribus corrupti omnis repellendus id veritatis. At esse, quo id eaque architecto ipsam fugiat aspernatur vitae, exercitationem illum error ipsum delectus accusamus culpa eum blanditiis voluptate voluptatem enim voluptas! Quod perspiciatis voluptatem quia repellendus libero! Labore pariatur enim amet, itaque atque commodi eveniet perferendis repellat quia, vero culpa. Velit distinctio, tenetur expedita inventore sint quidem eveniet rerum non quaerat ipsum maiores, omnis doloribus dolore suscipit aliquid quia numquam consequatur? At voluptates nisi ipsam maxime recusandae. Animi rem exercitationem reiciendis voluptatibus dolore sit deleniti, maiores corporis perferendis! Saepe rem error similique, repellat esse iste facilis adipisci, ad maiores deserunt cum fugiat minima perspiciatis nisi eveniet veniam quis, repudiandae vero necessitatibus. Maxime recusandae ipsum quas vitae. Rem eos saepe aliquam numquam dolor adipisci doloribus, quae aperiam possimus sequi excepturi. Ullam minima amet laboriosam porro doloribus natus optio minus nesciunt est, exercitationem sit repudiandae quaerat excepturi consequatur expedita autem perspiciatis saepe architecto repellendus ipsum vel deserunt! Inventore, obcaecati dolorum ab explicabo eaque iusto sed nostrum minus a quo beatae iure dolor aut officia minima! Accusantium, officia magni? Neque id, explicabo magnam, natus impedit totam iste repudiandae porro tempore possimus a quae nihil blanditiis? Animi, laboriosam. Vero impedit deleniti nisi eveniet dolore repudiandae doloribus et quia, eligendi earum ut nobis! Ullam necessitatibus iusto iste tenetur optio at quibusdam, culpa quae error alias impedit id, laboriosam vel dolores illum! Adipisci accusamus, esse sit et error magni culpa quidem cum suscipit exercitationem minus consequatur omnis deserunt quod, maxime, nesciunt ut facilis ipsam possimus mollitia ad odit pariatur? Facere quam ipsum iste est, a delectus animi maxime soluta ad aliquam dolorem, veniam dolor tenetur dicta voluptatum exercitationem eum vero! Culpa id, modi exercitationem alias vero quis. Rem nihil recusandae aliquid et perspiciatis fuga minima, culpa eius corporis nobis ipsam harum a rerum iusto amet blanditiis dolores! Alias laborum nulla nostrum modi quos porro nobis enim et sed necessitatibus, fugit odio nihil iure at natus sunt dolor accusantium quod nisi ipsa, saepe reprehenderit! Possimus nulla doloremque aliquam eius dignissimos cum aliquid, aut eos consequuntur culpa ducimus perspiciatis asperiores doloribus et cumque iure quaerat itaque omnis! Excepturi similique nam facere, numquam quis asperiores praesentium qui porro accusantium ad debitis sequi exercitationem eos at error voluptas natus quaerat perspiciatis! Earum dignissimos laudantium neque deserunt delectus accusantium vitae aliquam corporis magni voluptates facilis dolore perferendis accusamus obcaecati repellendus cumque iure sapiente dolores ipsum, veritatis vel ducimus corrupti sint maxime. Consectetur praesentium distinctio laborum deleniti, dicta modi eligendi perferendis vero sunt esse voluptas, voluptate mollitia? Suscipit totam sapiente vitae! Voluptate, optio dolore doloribus doloremque similique culpa, fugiat veritatis qui temporibus aliquam voluptates recusandae blanditiis! Nostrum repellat porro unde sed voluptatibus sunt quo quae consequatur sapiente numquam dignissimos provident optio suscipit a delectus ullam modi dolores, maiores iusto! Deserunt nesciunt sequi velit laborum atque. Quas voluptatibus magnam nam nisi eaque nulla facilis suscipit, neque expedita. Placeat repudiandae qui molestias neque commodi ratione incidunt quidem quod ab nulla fugiat odit libero excepturi exercitationem itaque, quo cum dolorum deserunt maxime? In ex natus mollitia adipisci ipsum similique, aperiam tempore. Quibusdam exercitationem at ipsa repellat accusamus esse velit cupiditate aperiam autem quaerat ut eveniet harum nam rem fugit reiciendis voluptatibus, id alias est delectus corporis voluptatem? Aspernatur fugiat animi cum ex rerum hic pariatur corrupti aperiam delectus, voluptatem voluptas consequatur culpa impedit alias minus, quidem mollitia quis nemo illum! Quos quas molestiae accusamus corporis nesciunt esse mollitia, quidem iusto eius earum a delectus expedita in ullam maxime soluta voluptatibus molestias.
            </div>
        </div>
        </>
    )
}