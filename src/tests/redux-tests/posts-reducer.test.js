import { getPostsAC, likePostAC, setCurrentPageAC, setTotalPostsCountAC, toggleIsFetchingAC } from "../../redux/action-creators/posts-action";
import postsReducer from "../../redux/reducers/posts-reducer";

let postsForTest = [
  {
    userId: 1,
    id: 1,
    title: "first post title",
    textContent: "first post text content",
    liked: false,
    likes: 3,
    isModalVisible: false,
    info: {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  },
  {
    userId: 3,
    id: 2,
    title: "second post title",
    textContent: "second post text content",
    liked: false,
    likes: 5,
    isModalVisible: false,
    info: {
      albumId: 2,
      id: 2,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  },
  {
    userId: 1,
    id: 3,
    title: "third post title",
    textContent: "third post text content",
    liked: false,
    likes: 0,
    isModalVisible: false,
    info: {
      albumId: 3,
      id: 3,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  },
];

let state = {
  currentPage: 1,
  pageSize: 2,
  posts: [],
  isFetching: false,
  totalPostsCount: 0,
  filterBy: "",
};

describe("---- GET ALL POSTS ----", () => {
  it("posts length should be three", () => {
    let action = getPostsAC(postsForTest);
    let newState = postsReducer(state, action);

    expect(newState.posts.length).toBe(3);
  });
  it("posts values should be correct", () => {
    let action = getPostsAC(postsForTest);
    let newState = postsReducer(state, action);

    expect(newState.posts).toMatchSnapshot();
  });
});

describe("---- TOGGLE IS FETCHING -----", ()=>{
    it("isFetching should be true", ()=>{
        let action = toggleIsFetchingAC(true);
        let newState = postsReducer(state, action);

        expect(newState.isFetching).toBe(true)
    })
    it("isFetching should be false", ()=>{
        let action = toggleIsFetchingAC(false);
        let newState = postsReducer(state, action);

        expect(newState.isFetching).toBe(false)
    })
})

describe("----- SET CURRENT PAGE -----", ()=>{
    it("currentPage should be one", ()=>{
        let action = setCurrentPageAC(1)
        let newState = postsReducer(state, action)

        expect(newState.currentPage).toBe(1)
    })
    it("currentPage should be two", ()=>{
        let action = setCurrentPageAC(2)
        let newState = postsReducer(state, action)

        expect(newState.currentPage).toBe(2)
    })
})

describe("------- SET TOTAL POSTS COUNT ------", ()=>{
    it("totalPostsCount should be three", ()=>{
        let action = setTotalPostsCountAC(3)
        let newState = postsReducer(state, action)

        expect(newState.totalPostsCount).toEqual(3)
    })
})
