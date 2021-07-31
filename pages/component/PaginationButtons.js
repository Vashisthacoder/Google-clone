
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import styles from'./PaginationButtons.module.css'

function PaginationButtons() {

const router = useRouter();

const startIndex = Number(router.query.start) || 0;

    return (
        <div>
            
      {startIndex >=  10 && (
          <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          
          <div>
          
          <SkipPreviousIcon id={styles.p}/>
        
             
          </div>

          </Link>
      )}

        <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
         
         <div>
             <SkipNextIcon id={styles.n}/>
               
        
         </div>
        
        </Link>



        </div>
    )
}

export default PaginationButtons
