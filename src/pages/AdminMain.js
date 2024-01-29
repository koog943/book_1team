import '../styles/searchBar.css';

function AdminMain() {
    return (
        <main>
            <section className='searchSection'>
                <input className="searchBar" type="text" name="q" placeholder="검색어를 입력하세요"></input>
                <div className='searchImgBox'>
                    <img className='searchImg' src='/img/search.png' alt='돋보기'></img>
                </div>
            </section>
            <section className='bookList'>
                <h1>책 목록</h1>
                <table className='bookTable'>
                    <th>번호</th>
                    <th>제목</th>
                    <th>저자</th>
                    <th>출판사</th>
                    <th></th>
                    <tr>
                        <td className='no'>1</td>
                        <td className='title'>참을 수 없는 존재의 가벼움</td>
                        <td className='author'>밀란 쿤데라</td>
                        <td className='publisher'>민음사</td>
                        <td className='editButton'>
                            <button>편집하기</button>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'>2</td>
                        <td className='title'>인간실격</td>
                        <td className='author'>다자이 오사무</td>
                        <td className='publisher'>민음사</td>
                        <td className='editButton'>
                            <button>편집하기</button>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                    <tr>
                        <td className='no'></td>
                        <td className='title'></td>
                        <td className='author'></td>
                        <td className='publisher'></td>
                        <td className='editButton'>
                        </td>
                    </tr>
                </table>
            </section>
        </main>
    );
}


export default AdminMain;