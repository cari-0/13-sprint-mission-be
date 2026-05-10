export default function Items() {
  return (
    <div className="items">
      <div className="items-frame">
        <div className="search">
          <span className="what-product">판매 중인 상품</span>
          <div className="space"></div>
          <div className="search-frame">
            <input
              type="text"
              placeholder="검색할 상품을 입력해주세요"
              className="search-inner"
            />
            <button className="search-btn">
              <span className="search-btn-word">상품 등록하기</span>
            </button>
          </div>
          <select className="search-filter">
            <option value="new">최신순</option>
            <option value="like">좋아요순</option>
          </select>
        </div>
      </div>
      <div className="page-frame"></div>
    </div>
  );
}
