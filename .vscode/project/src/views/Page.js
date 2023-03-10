import { Link, useParams } from "react-router-dom";
import CategoryList from "../components/CategoryList";
import axios from "axios";
import styles from "./Page.module.css";

const Page = () => {
  return (
    <>
      <CategoryList />
      <div className={styles.contentBox}>
        <div className={styles.contentMain}>
          <table className={styles.contentTitleBox}>
            <td className={styles.contentTitle}>
              <div className={styles.contentTitleText}>게시글 제목</div>
              <td className={styles.contentInfo}>
                <td className={styles.contentWriter}>작성자</td>
                <td className={styles.like}>15</td>
                <td className={styles.likeBtn}>추천</td>
              </td>
            </td>
          </table>
          <div className="m-2">
            <span>
              text 글 내용 내용
              <br />
              내용
              <br />
              000
              <br />
              ㅅㄷㅌㅅ
            </span>
          </div>
        </div>

        <table className="w-full mt-2">
          <tr className="h-96 flex gap-2">
            <td className="w-full border-2">
              <div className="border-2">댓글</div>
              <tr className="border-b-2 flex">
                <td className="pr-2">작성자</td>
                <td className="pr-2 grow">댓글 내용</td>
                <td className="pr-2">추천수</td>
              </tr>
              <tr className="border-b-2 flex">
                <td className="pr-2">asdf</td>
                <td className="pr-2 grow">
                  ㄱㄴㄷㄹ
                  <button className="ml-4 border-2">수정/삭제</button>
                </td>
                <td className="pr-2">2</td>
                <button className="border-2">추천</button>
              </tr>

              <tr className="border-b-2 flex bg-[#d3d3d3]">
                <td className="pr-2">→ 대댓</td>
                <td className="pr-2 grow">ㅁㅂㅅㅇ</td>
                <td className="pr-2">3</td>
                <button className="border-2">추천</button>
              </tr>

              <tr className="border-b-2 flex">
                <td className="pr-2">qwer</td>
                <td className="pr-2 grow">ㅁㅂㅅㅇ</td>
                <td className="pr-2">3</td>
                <button className="border-2">추천</button>
              </tr>

              <tr className="border-b-2 flex">
                <td className="pr-2">zxcv</td>
                <td className="pr-2 grow">ㅈㅊㅋㅌ</td>
                <td className="pr-2">4</td>
                <button className="border-2">추천</button>
              </tr>
            </td>
          </tr>
        </table>

        <table className="w-full">
          <tr className="h-80 flex gap-2 m-2">
            <td className="w-full border-2">
              <div className="border-2">카테고리 1</div>
              <tr className="border-b-2">
                <td className="pr-3">순서</td>
                <td className="w-10/12">제목</td>
                <td className="pr-2">추천</td>
                <td>조회</td>
              </tr>
              <tr className="border-b-2">
                <td className="pr-3">1</td>
                <td className="w-10/12">title1 -----</td>
                <td className="pr-2">20</td>
                <td>140</td>
              </tr>
              <tr className="border-b-2">
                <td className="pr-3">2</td>
                <td className="w-10/12">title2 -----</td>
                <td className="pr-2">23</td>
                <td>214</td>
              </tr>
              <tr className="border-b-2">
                <td className="pr-3">3</td>
                <td className="w-10/12">title3 -----</td>
                <td className="pr-2">41</td>
                <td>123</td>
              </tr>
              <tr className="border-b-2">
                <td className="pr-3">4</td>
                <td className="w-10/12">title4 -----</td>
                <td className="pr-2">12</td>
                <td>52</td>
              </tr>
            </td>
          </tr>
        </table>

        <div className="p-4 flex items-center	">
          <div className="m-auto text-center	">
            <div>◀︎ 1 2 3 4 5 6 7 8 9 ▶︎</div>
            <button className="border-2">제목,내용 ▼</button>
            <input type="text" className="border-2" />
            <button className="m-1 border-2 px-1">검색</button>
            <button className="relative ml-20 border-2">글쓰기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
