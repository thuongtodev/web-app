import _get from 'lodash/get'
import { mockArticles } from './mockData'
import GridNews from '../GridNews'
import styles from './styles.scss'
const NewsByCategory = props => {
  return (
    <div className="container pt-5">
      <div className="row align-items-start justify-content-center mt-md-0 pt-5 pt-md-0">
        <div className="col">
          <main className="pt-3 pt-md-4">
            <GridNews
              title={`Lastest video news:`}
              news={mockArticles}
              justifyContent="center"
              imgClassName={styles.imgArticle}
              dynamicPath="videos/[article]"
            />
          </main>
          // TODO: implement pagination
        </div>
      </div>
    </div>
  )
}

export default NewsByCategory
