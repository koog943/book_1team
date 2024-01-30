async function fetchBooks() {
    try {
        const response = await fetch('/book'); // 서버의 /book 엔드포인트에 GET 요청
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }
        const data = await response.json(); // JSON 데이터를 읽음
        return data; // 데이터 반환
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error; // 에러를 다시 던짐
    }
}

export default fetchBooks;