import _get from 'lodash/get'
import { useRouter, Router } from 'next/router'
import { newsByCategory } from './mockData'
import { useEffect, useState } from 'react'
import GridNews from '../GridNews'

const NewsByCategory = props => {
  const router = useRouter()
  const [category, setCategory] = useState({})
  useEffect(() => {
    const categoryId = _get(router, 'query.category')
    const currentCategory = newsByCategory(categoryId, 1)
    if (!currentCategory) {
      Router.push('/404')
    }
    setCategory(currentCategory)
  }, [router])

  return (
    <div className="container pt-5">
      <div className="row align-items-start justify-content-center mt-md-0 pt-5 pt-md-0">
        <div className="col">
          <main className="pt-3 pt-md-4">
            <GridNews
              title={`Lastest ${category.name} news:`}
              news={category.articles}
              justifyContent="center"
            />
          </main>
          // TODO: implement pagination
        </div>
      </div>
    </div>
  )
}

export default NewsByCategory
