import styles from './MainPage.module.css'
import { Link } from 'react-router-dom';

const Page = (): JSX.Element => {
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
          <tr className="h-96 flex gap-2 m-2">
            <td className="w-full border-2">
              <div className="border-2 text-2xl">게시글 제목</div>
              <tr className='border-b-2 flex'>
                <td className='grow	'>작성자</td>
                <td className='pr-2'>15</td>
                <td className='ml-2 border-2'>추천</td>
              </tr>
              <tr>게시글 내용 -----</tr>
              <tr>게시글 내용 -----</tr>
              <tr>게시글 내용 -----</tr>
              <tr>게시글 내용 -----</tr>
              <tr>게시글 내용 -----</tr>
              
            </td>
          </tr>
        </table>

        <table className="w-full">
          <tr className="h-96 flex gap-2 m-2">
            <td className="w-full border-2">
              <div className="border-2">댓글</div>
              <tr className='border-b-2 flex'>
                <td className='pr-2'>작성자</td>
                <td className='pr-2 grow'>댓글 내용</td>
                <td className='pr-2'>추천수</td>
              </tr>
              <tr className='border-b-2 flex'>
                <td className='pr-2'>asdf</td>
                <td className='pr-2 grow'>ㄱㄴㄷㄹ
                  <button className='ml-4 border-2'>수정/삭제</button>
                </td>
                <td className='pr-2'>2</td>
                <button className='border-2'>추천</button>

              </tr>

              <tr className='border-b-2 flex bg-slate-400'>
                <td className='pr-2'>→ 대댓</td>
                <td className='pr-2 grow'>ㅁㅂㅅㅇ</td>
                <td className='pr-2'>3</td>
                <button className='border-2'>추천</button>
              </tr>
              
              <tr className='border-b-2 flex'>
                <td className='pr-2'>qwer</td>
                <td className='pr-2 grow'>ㅁㅂㅅㅇ</td>
                <td className='pr-2'>3</td>
                <button className='border-2'>추천</button>

              </tr>

              <tr className='border-b-2 flex'>
                <td className='pr-2'>zxcv</td>
                <td className='pr-2 grow'>ㅈㅊㅋㅌ</td>
                <td className='pr-2'>4</td>
                <button className='border-2'>추천</button>

              </tr>
              
            </td>
          </tr>
        </table>


        <table className="w-full">
          <tr className="h-80 flex gap-2 m-2">
            <td className="w-full border-2">
              <div className="border-2">카테고리 1</div>
              <tr className='border-b-2'>
                <td className='pr-3'>순서</td>
                <td className='w-10/12'>제목</td>
                <td className='pr-2'>추천</td>
                <td >조회</td>
              </tr>
              <tr className='border-b-2'>
                <td className='pr-3'>1</td>
                <td className='w-10/12'>title1 -----</td>
                <td className='pr-2'>20</td>
                <td >140</td>
              </tr>
              <tr className='border-b-2'>
                <td className='pr-3'>2</td>
                <td className='w-10/12'>title2 -----</td>
                <td className='pr-2'>23</td>
                <td >214</td>
              </tr>
              <tr className='border-b-2'>
                <td className='pr-3'>3</td>
                <td className='w-10/12'>title3 -----</td>
                <td className='pr-2'>41</td>
                <td >123</td>
              </tr>
              <tr className='border-b-2'>
                <td className='pr-3'>4</td>
                <td className='w-10/12'>title4 -----</td>
                <td className='pr-2'>12</td>
                <td >52</td>
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

export default Page;