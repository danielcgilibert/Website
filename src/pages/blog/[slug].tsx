import SyntaxHighlighterCustom from '@/components/syntaxHighlighterCustom'
import { IPost } from '@/types/post'
import { Attributes } from '@/types/project'
import Button from '@/ui/button'
import { api } from '@/utils/api'
import { NextPage } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useCallback, useRef } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { IoIosArrowBack } from 'react-icons/io'

const components = { SyntaxHighlighterCustom }

type PostProps = {
  post: {
    attributes: Attributes
  }
  mdxSource: any
}

const PostPage: NextPage<PostProps> = ({ post: { attributes }, mdxSource }) => {
  const { name, createdAt } = attributes
  const date = new Date(createdAt)
  const formatDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
  const refAnimationInstance = useRef<any>(null)
  const router = useRouter()

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        particleCount: Math.floor(500 * particleRatio)
      })
  }, [])

  const fire = useCallback(() => {
    makeShot(0.55, {
      spread: 120,
      startVelocity: 25,
      decay: 0.9,
      scalar: 1
    })
  }, [makeShot])
  return (
    <>
      <NextSeo title={`${name}`} description={`post sobre ${name}`} />
      <div className='px-8 md:p-0'>
        <header className=' mb-8 flex items-center justify-between'>
          <Button
            className='flex items-center justify-center px-4 text-sm font-light'
            onClick={() => router.back()}
          >
            <IoIosArrowBack size={20} />
            Atras
          </Button>

          <div className='relative flex items-center justify-end gap-4 border-customGray pb-2 md:w-fit md:border-b-2 '>
            <ReactCanvasConfetti
              refConfetti={getInstance}
              style={{
                position: 'absolute',
                pointerEvents: 'none',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0
              }}
            />
            <span className='hidden text-sm font-extralight opacity-60 md:block'>
              Tiempo 5 min
            </span>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                fire()
              }}
              className=' flex items-center justify-center gap-1 text-sm font-light'
            >
              <AiOutlineShareAlt size={20} /> Share
            </Button>
          </div>
        </header>

        <article className='prose mx-auto w-full'>
          <h1 className='m-0 text-lightOrange'>{name}</h1>
          <span className='text-darkOrange'>{formatDate}</span>
          <MDXRemote {...mdxSource} components={components} />
        </article>
      </div>
    </>
  )
}

const getStaticPaths = async () => {
  try {
    const {
      data: { data: posts }
    } = await api.get('/posts')

    const paths = posts.map((post: IPost) => ({
      params: {
        slug: post.attributes.urlSlug
      }
    }))

    return {
      paths,
      fallback: false
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false
    }
  }
}

const getStaticProps = async ({ params: { slug } }: any) => {
  try {
    const {
      data: { data: posts }
    } = await api.get('/posts')

    const [post] = posts.filter(
      (post: IPost) => post.attributes.urlSlug === slug
    )
    const mdxSource = await serialize(post.attributes.content)

    return {
      props: {
        post,
        mdxSource
      }
    }
  } catch (error) {
    return {
      props: {
        post: [],
        mdxSource: []
      }
    }
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage