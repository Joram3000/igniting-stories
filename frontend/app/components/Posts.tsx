import VerhaalCard from '@/app/components/VerhaalCard'
import {sanityFetch} from '@/sanity/lib/live'
import {morePostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: morePostsQuery,
    params: {skip, limit},
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <div>
      <h2>Meer verhalen</h2>
      <div className="verhalen-grid">
        {data.map((post: AllPostsQueryResult[number]) => (
          <VerhaalCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  )
}
