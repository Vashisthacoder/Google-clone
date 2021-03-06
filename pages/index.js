import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';
import styles from'./index.module.css'
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';


export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

 const search = (e) => {
   e.preventDefault();
   const term = searchInputRef.current.value;

   if (!term) return;

   router.push(`/search?term=${term}`);

 }
  return (
    <div className={styles.index}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Header */}

<header className={styles.k}>

{/* Left */}

<div className={styles.logos}>


  
</div>

{/*Right*/}
 
 <div className={styles.right}>
 <a href="https://www.indiatoday.in/" id={styles.image}> <h1>News</h1>  </a >
 <a href="https://yandex.com/maps/" id={styles.maps} ><h1>Maps</h1>  </a>

   <div className={styles.icon}>

   <NotificationsIcon/>
   <AppsIcon/>

   </div>

</div>

<div className={styles.weather}>

<img src={"./Assets/weather2.png"} alt="google"/> 
</div>





</header>

{/* Body */}



 <form>
      

<div className={styles.img}>

  <img src={"./Assets/logo4.png"} alt="google1"/>

</div>

 


    <div   className={styles.input}>
     
     <input
      ref={searchInputRef} type="text" id={styles.input}/>
     <SearchIcon id={styles.icon}/>

    </div>

    <div className={styles.search}>
      

    <button onClick={search} > </button>

    
     


    </div>


 </form>


{/* footer */}

<div className={styles.image}>

 


</div>


<div className={styles.rk}>
  <h3>Developed By: Ritik / Kartik</h3>
</div>



  


</div>
)
}

