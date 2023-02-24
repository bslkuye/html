import styles from './MainPage.module.css'
import { Link } from 'react-router-dom';

const Category1 = (): JSX.Element => {
  return (
    <>
      <div className="w-48 border-2 h-screen inline">
        <div className="m-1">
          <Link to="category1">카테고리1</Link>
        </div>
        <div className="m-1">
          <Link to="category2">카테고리2</Link>
        </div>
        <div className="m-1">
          <Link to="category3">카테고리3</Link>
        </div>
      </div>
      <div className="w-full">
        <table className="w-full">
          <tr className="h-80 flex gap-2 m-2">
            <td className="w-full border-2">
              <div className="border-2">카테고리 1</div>
              <tr className='border-b-2 flex'>
                <td className='pr-3 w-[46px]'>순서</td>
                <td className='pr-3 w-[100px]'>작성자</td>
                <td className='grow'>제목</td>
                <td className='pr-3 w-[46px]'>추천</td>
                <td className='pr-3 w-[46px]'>조회</td>
              </tr>
              <tr className='border-b-2 flex'>
                <td className='pr-3 w-[46px]'>1</td>
                <td className='pr-3 w-[100px]'>작성자</td>
                <td className='grow'>
                  <Link to="/page">
                    title1 -----
                  </Link>
                </td>
                <td className='pr-3 w-[46px]'>20</td>
                <td className='pr-3 w-[46px]'>140</td>
              </tr>
              <tr className='border-b-2 flex'>
                <td className='pr-3 w-[46px]'>2</td>
                <td className='pr-3 w-[100px]'>작성자</td>
                <td className='grow'>title2 -----</td>
                <td className='pr-3 w-[46px]'>23</td>
                <td className='pr-3 w-[46px]'>214</td>
              </tr>
              <tr className='border-b-2 flex'>
                <td className='pr-3 w-[46px]'>3</td>
                <td className='pr-3 w-[100px]'>작성자</td>
                <td className='grow'>title3 -----</td>
                <td className='pr-3 w-[46px]'>41</td>
                <td className='pr-3 w-[46px]'>123</td>
              </tr>
              <tr className='border-b-2 flex'>
                <td className='pr-3 w-[46px]'>4</td>
                <td className='pr-3 w-[100px]'>작성자</td>
                <td className='grow'>title4 -----</td>
                <td className='pr-3 w-[46px]'>12</td>
                <td className='pr-3 w-[46px]'>52</td>
              </tr>
            </td>
          </tr>
        </table>

        <div className="p-4 flex items-center	">
          <div className="m-auto text-center	">
            <div>◀︎ 1 2 3 4 5 6 7 8 9 ▶︎</div>
            <button className='border-2'>제목,내용 ▼</button>
            <input type="text" className="border-2" />
            <button className="m-1 border-2 px-1">검색</button>
            <button className='relative ml-20 border-2'>글쓰기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category1;