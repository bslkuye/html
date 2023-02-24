import styles from './MainPage.module.css'
import { Link } from 'react-router-dom';

const MyPage = (): JSX.Element => {
  return (
    <>
      <div className='w-48 border-2 h-screen inline'>
        <div className='m-1'>
          <Link to='category1'>카테고리1</Link>
        </div>
        <div className='m-1'>
          <Link to='category2'>카테고리2</Link>
        </div>
        <div className='m-1'>
          <Link to='category3'>카테고리3</Link>
        </div>
      </div>
      <div>
        <div className='p-4'>
          <input type="text" className='border-2 m-auto'/>
          <button className='m-1 border-2 px-1'>검색</button>
        </div>

        <table>
          <tr className='h-80 flex gap-2 m-2'>
            <td className='w-80 border-2'>
              <div className='border-2'>내가 쓴 글</div>
              <span>------</span>
            </td>

            <td className='w-80 border-2'>
              <div className='border-2'>내가 쓴 댓글</div>
              <span>------</span>
            </td>
          </tr>

          <tr className='h-80 flex gap-2 m-2'>
            <td className='w-80 border-2'>
              <div className='border-2'>관심있는 글</div>
              <span>------</span>
            </td>

            <td className='w-80 border-2'>
              <div className='border-2'>방명록</div>
              <span>------</span>
            </td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default MyPage;