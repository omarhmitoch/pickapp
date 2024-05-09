import './index.css';
import Image from "./images/logo.png"
import React from 'react';

function App() {
  const [result, setResult] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [winners, setWinnners] = React.useState([]);
  return (
    <div className='container'>
      <img className='logo' src={Image}/>
      <div className="wrapper">
        <div className={`${loading ? "animated": ""} line1`}></div>
        <div className={`${loading ? "animated": ""} line2`}></div>

        {
          result ? (
            <div className='result' onClick={() => window.open(result.url, "_blank")}>
              @{result.username}
            </div>

          ): (
            <div className='user_span'/>
          )
        }

        <button 
          onClick={()=>{
            let _winners = users.filter(el=> el.likes <=3).filter(el=> !winners.includes(el.url));
            setLoading(true);
            setResult(null);
            setTimeout(() => {
            let winner = _winners[Math.floor(Math.random() * _winners.length)];
              setResult({
                username: winner.url.split("/")[3],
                url: winner.url
              })
              setWinnners(prev => [...prev, winner.url]);
              setLoading(false);
            }, 3000);
          }}
        
          className='spin'>
          Let's spin
        </button>
        
      </div>

    </div>
  );
}

export default App;

const users = [
    {
        "url": "https://instagram.com/ka_maaar_/",
        "likes": 19
    },
    {
        "url": "https://instagram.com/mohamed.ouaj.9/",
        "likes": 19
    },
    {
        "url": "https://instagram.com/hichamovch/",
        "likes": 19
    },
    {
        "url": "https://instagram.com/ilaaitmalek/",
        "likes": 18
    },
    {
        "url": "https://instagram.com/digitale_ds/",
        "likes": 18
    },
    {
        "url": "https://instagram.com/mehdi_bensalh2/",
        "likes": 18
    },
    {
        "url": "https://instagram.com/abdessamad_matoual/",
        "likes": 18
    },
    {
        "url": "https://instagram.com/ayoub_fdev/",
        "likes": 17
    },
    {
        "url": "https://instagram.com/najib.hadiri/",
        "likes": 17
    },
    {
        "url": "https://instagram.com/adil__elmaazi/",
        "likes": 17
    },
    {
        "url": "https://instagram.com/abderrazakaafaf/",
        "likes": 16
    },
    {
        "url": "https://instagram.com/hafsa_founda/",
        "likes": 16
    },
    {
        "url": "https://instagram.com/soso_souky/",
        "likes": 16
    },
    {
        "url": "https://instagram.com/simofficial377/",
        "likes": 16
    },
    {
        "url": "https://instagram.com/mehdi_zg1/",
        "likes": 16
    },
    {
        "url": "https://instagram.com/nabilibnerrady/",
        "likes": 16
    },
    {
        "url": "https://instagram.com/hemzalz/",
        "likes": 16
    },
    {
        "url": "https://instagram.com/boredreda/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/raxid_vagabond/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/fatinestore/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/ismail.alaouih/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/hichamwb/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/zara_el1_/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/ucef_ali/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/ouaamoummohamed/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/abderrazza_k/",
        "likes": 15
    },
    {
        "url": "https://instagram.com/ashraf.essahafi/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/achraflargo1/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/p.abde/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/fubuk1.viih/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/simomaalani/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/ouiam_beno/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/lr___salah_/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/its_not_souhail/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/el_mehdi_ounnabi/",
        "likes": 14
    },
    {
        "url": "https://instagram.com/ayoubzaoui5/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/bourkadibadr/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/ilyes_soussou/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/kadmiri.vlog/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/fatie.hrr/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/business__elegance/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/yassmineben15/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/al__khelaifi1/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/oussama_mouhamed_essaouidi/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/nlpprog/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/thisisyehia/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/fameluxe5/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/houdasalihe/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/souad___web/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/abdo.o.1/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/ibnouregragui0/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/runway_check_in/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/mr.elamrani/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/e.youbin/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/mohamed.akram.moustaquim/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/rebellious.prod/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/ayoub_edmary/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/hichem_rou2.0/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/yassine___a__m/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/sski_9800/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/nour_eddine_ln/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/souhail.ach/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/fatima.ezzahra19/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/bgh.moha/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/adamidi__/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/oucherriii/",
        "likes": 13
    },
    {
        "url": "https://instagram.com/yusuf__bz/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/mehdi____zh/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/akkmostafa/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/wafaa.mohammed12/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/mediatec2023/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/jawadgaman/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/thefilali/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/by_lapiece/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/_zmluxury.ma/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/yahyahibaoui23/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/banacer_abdsalam/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/nabilelaimchi/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/noureddine.trp/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/dina_photoghraphya_tetouaniya/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/akabisoufiane/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/simobmx.93/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/mehdielhadna/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/harrar___anas/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/ajraf_ayoub/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/lamiaeelg/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/eddamouhe/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/issam.ech/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/zakarialaajily/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/uness_elmansouri/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/ayoub_jadia/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/houssamrafi/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/aissam_aitkhouya/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/anas.belqaid/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/j.abdellah1002/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/nasserjer/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/saadalfalil/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/amal_belghiti_alaoui/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/najidanas/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/drate.abdo/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/elmach_ri/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/derert_lion/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/abdeesamadd/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/youssrahakam1/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/oukadoussama/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/abdelmounaimhsl/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/ismailtaoumi/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/rca1949427/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/mustapha_benalla/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/hamzaelaassel/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/ali_zegraoui/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/jamali_badrdin/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/oumad.salim/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/r_nameeek/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/rachid__ait37/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/mohamed_reda_elaasimi/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/money_beast.me/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/abdelhadiidmansour/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/elghoulisaad/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/sara_ioog/",
        "likes": 12
    },
    {
        "url": "https://instagram.com/moadbenouar/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/elalamamarouane/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mouniir___wk/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/stibbsy.shp/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/anouar.elmarji/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/med.rhioui/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/bhr_ayoub_/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/fatima_ezzhra97gh/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/yamenbh/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/coach__hayat.369/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/younes_ben_al1al/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/bouaddimhamed/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/soulaimane_benaamir/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/marouane_sallam/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/hichamouhsayn/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/youyou_bouhachouch/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/weeb.masterg/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/coz.ma12/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/_walid_rouane/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/khalid_ha2/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/anas.lmj/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mahrirshop1/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/ebtissam_achououiy/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mouad_nayli/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mohammed.ouichen/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/yoettalibi/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mouadbahmed/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/toop_shop_22/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/abdellah_bouhajir/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/hamza.lh.22/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/salmadaaraoui/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/marouane_lakouasmi/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/amine.benabdellah1/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/karim_ouit/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mahmoud_smaoui/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/gueddari_44/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/abdl2z/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/ayoub_el_oualji/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/nordin_bofker/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/haliim.digital/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/be_the_ch/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/azizkaanoune/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/anas.zailaf/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/m.saoud9/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/st.rong9950/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/ussef_tl/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/zakariaabika/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/iamhamzaelhamzaoui/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/abduh_36/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/ayyoub_essaidi/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/houssam_zerfi/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/soufiane.benkadir/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mohcine_lasmar/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/mohamed.ejj/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/najib_atm/",
        "likes": 11
    },
    {
        "url": "https://instagram.com/elfm23/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/ach_raf838/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/simo_zafathi/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/marwanathlete/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/3dnane_zidani/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/asmaa_ees/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/mr__laaroussi/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/abdelkebir.kandri/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/jawadhaida1987/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/adilo.10/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/rajae_achoukhane/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/safaa__abl/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/lillycosmetics9/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/issam.hachchoumi/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/ivan.hatime/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/limedia.ma/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/callmesimo01/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/mohammedbghada/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/bookssellers2023/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/extra._planet/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/afsaissi/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/ayoub_bouidoukane/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/meed_rahimi/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/anouar_phy/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/thegooddreamcatcher/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/aliilachgar2/",
        "likes": 10
    },
    {
        "url": "https://instagram.com/idressihajar/",
        "likes": 9
    },
    {
        "url": "https://instagram.com/abdelmoun88/",
        "likes": 9
    },
    {
        "url": "https://instagram.com/khaouaadil/",
        "likes": 9
    },
    {
        "url": "https://instagram.com/abousaii/",
        "likes": 9
    },
    {
        "url": "https://instagram.com/yousratoon/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/abd.bgl/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/khaider_mohamed/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/soulaimaneelbakkali/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/mcrihani/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/najat.allam/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/saidkharbouch11/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/simo__flow_36/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/fleuriste_agadir_/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/salmaeelfarissi/",
        "likes": 8
    },
    {
        "url": "https://instagram.com/toys.shop555/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/zakaria_el_mansourii/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/karamila616/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/sendokkhas/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/book_family1/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/abdlekrim2020/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/nafissa_naim/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/mostafa_oubelaid/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/hind_ezzahery/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/mahboubb/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/aziyou17/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/tacitus.kilgore7/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/artnoriatafrent/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/pikalti/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/mahmodkarimi1/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/edward_dogi/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/kamal_omari1/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/yo_ussef1932/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/fouad_el_32/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/alyae______/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/islamhd526/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/khalid_el_mesbahi/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/khadija_bou_03/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/khalidmarfouk/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/mehdiloukii/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/aymentaoussi/",
        "likes": 7
    },
    {
        "url": "https://instagram.com/houssam_el_madani/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/abdelouaddi/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/assim_naim99/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/mohamed.abouttayeb/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/abdo_eddaoudi/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/ayoub_elkholfi/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/mohamed_aouate/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/zakariaelfaqri/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/bigwell997/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/bouchouchamed/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/bouhssine_bouaddi/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/bel__hicham/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/mehdii_safone/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/racha_ida22/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/driss_zaghloul/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/fit_likepro/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/capitano_yassine/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/modex.shoppe/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/hamzabelcaid2023/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/devel_2/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/azeddine_ghanem/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/ayoub.growth/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/akapoi018/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/hassanelb.me/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/edhiicham/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/mohamed.berone/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/hamzaelyasini/",
        "likes": 6
    },
    {
        "url": "https://instagram.com/mourad.ourrai/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/yjeep92/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/as__maeeeee/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/tasehilateshop/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/adam.__.azz/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/ahmed_eledrissi_/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/mimi.mer3/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/vi8_e0/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/ilyasbouaaroua_/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/essouidi_17/",
        "likes": 5
    },
    {
        "url": "https://instagram.com/simo_id9/",
        "likes": 4
    },
    {
        "url": "https://instagram.com/messoudi.ayoub/",
        "likes": 4
    },
    {
        "url": "https://instagram.com/ayoub_aseffar/",
        "likes": 4
    },
    {
        "url": "https://instagram.com/mexiicaiinn/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/don.med91/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/zakaria.digital1/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/abdelghafouraitelamel/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/medamskal/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/salah_jettioui/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/omar___bt/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/its.med.ali/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/riyali2024/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/hayou_rachid/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/abiill004/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/abdeltif_jr/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/zr_hafssa66/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/1ridouane/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/zikov7.1officiel/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/malak.alamii1/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/wadiokbh/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/chaimae_ajebar/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/launchese_mena/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/cherq_hossam/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/oussamaayoub49/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/azizdafir/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/fabriceaubama/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/ahd_prv05/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/auoub.zaid/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/ilyas.he/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/stevenas36/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/karim_paiy/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/asratbilal/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/amine_el_asery/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/anas__hilmi/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/charak_mbarak/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/alandigital815/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/nawfal.zyane/",
        "likes": 3
    },
    {
        "url": "https://instagram.com/ghozelhandmade/",
        "likes": 2
    },
    {
        "url": "https://instagram.com/hajioui.younes/",
        "likes": 2
    },
    {
        "url": "https://instagram.com/soufianeaitoulhous/",
        "likes": 2
    },
    {
        "url": "https://instagram.com/taha.ei/",
        "likes": 2
    },
    {
        "url": "https://instagram.com/leila.zaida3/",
        "likes": 2
    },
    {
        "url": "https://instagram.com/baka.offcile/",
        "likes": 2
    },
    {
        "url": "https://instagram.com/l_ina_imane/",
        "likes": 2
    },
    {
        "url": "https://instagram.com/ellhaaaj/",
        "likes": 1
    },
    {
        "url": "https://instagram.com/salaed21/",
        "likes": 1
    },
    {
        "url": "https://instagram.com/younessluin/",
        "likes": 1
    },
    {
        "url": "https://instagram.com/reda_3alami/",
        "likes": 0
    }
]