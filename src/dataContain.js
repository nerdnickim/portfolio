import main from "./photo/newWave/main.png";
import menu from "./photo/newWave/menu.png";
import archiveList from "./photo/newWave/archiveList.png";
import productList from "./photo/newWave/productList.png";
import detail from "./photo/newWave/productDetail.png";

// Insta Web
import login from "./photo/cloninggram/web/login.png";
import confirm from "./photo/cloninggram/web/loginConfirm.png";
import signUp from "./photo/cloninggram/web/signUp.png";
import home from "./photo/cloninggram/web/home.png";
import profile from "./photo/cloninggram/web/instaProfile.png";
import profileEdit from "./photo/cloninggram/web/profileEdit.png";
import follower from "./photo/cloninggram/web/follower.png";
import messages from "./photo/cloninggram/web/messages.png";
import message from "./photo/cloninggram/web/message.png";
import toUser from "./photo/cloninggram/web/toUser.png";
import notification from "./photo/cloninggram/web/notification.png";
import searchPost from "./photo/cloninggram/web/searchPost.png";

// Insta App

import appLogin from "./photo/cloninggram/app/login.png";
import appSignUp from "./photo/cloninggram/app/signUp.png";
import appHome from "./photo/cloninggram/app/home.png";
import appDetail from "./photo/cloninggram/app/postDetail.png";
import appPostOptions from "./photo/cloninggram/app/postOptions.png";
import appPostEdit from "./photo/cloninggram/app/postEdit.png";
import appUploadSingle from "./photo/cloninggram/app/uploadSingle.png";
import appUploadMultiple from "./photo/cloninggram/app/uploadMultiple.png";
import appUploadFeed from "./photo/cloninggram/app/uploadFeed.png";
import appProfile from "./photo/cloninggram/app/profile.png";
import appProfileEdits from "./photo/cloninggram/app/profileEdits.png";
import appProfileEdit from "./photo/cloninggram/app/profileEdit.png";
import appMessage from "./photo/cloninggram/app/message.png";
import appMessages from "./photo/cloninggram/app/messages.png";
import appToUser from "./photo/cloninggram/app/toUser.png";
import appComment from "./photo/cloninggram/app/comment.png";
import appSearch from "./photo/cloninggram/app/search.png";
import appNotification from "./photo/cloninggram/app/notification.png";

export const photos = {
	newWave: [
		{ name: "main", src: main, id: 1 },
		{ name: "menu", src: menu, id: 2 },
		{ name: "archiveList", src: archiveList, id: 3 },
		{ name: "productList", src: productList, id: 4 },
		{ name: "detail", src: detail, id: 5 },
	],
	instaWeb: [
		{ name: "login", src: login, id: 1 },
		{ name: "confirm", src: confirm, id: 2 },
		{ name: "signUp", src: signUp, id: 3 },
		{ name: "home", src: home, id: 4 },
		{ name: "profile", src: profile, id: 5 },
		{ name: "profileEdit", src: profileEdit, id: 6 },
		{ name: "follower", src: follower, id: 7 },
		{ name: "messages", src: messages, id: 8 },
		{ name: "toUser", src: toUser, id: 9 },
		{ name: "message", src: message, id: 10 },
		{ name: "notification", src: notification, id: 11 },
		{ name: "searchPost", src: searchPost, id: 12 },
	],
	instaApp: [
		{ name: "appLogin", src: appLogin, id: 1 },
		{ name: "appSignUp", src: appSignUp, id: 2 },
		{ name: "appHome", src: appHome, id: 3 },
		{ name: "appDetail", src: appDetail, id: 4 },
		{ name: "appPostOptions", src: appPostOptions, id: 5 },
		{ name: "appPostEdit", src: appPostEdit, id: 6 },
		{ name: "appUploadSingle", src: appUploadSingle, id: 7 },
		{ name: "appUploadMultiple", src: appUploadMultiple, id: 8 },
		{ name: "appUploadFeed", src: appUploadFeed, id: 9 },
		{ name: "appProfile", src: appProfile, id: 10 },
		{ name: "appProfileEdits", src: appProfileEdits, id: 11 },
		{ name: "appProfileEdit", src: appProfileEdit, id: 12 },
		{ name: "appMessages", src: appMessages, id: 13 },
		{ name: "appMessage", src: appMessage, id: 14 },
		{ name: "appToUser", src: appToUser, id: 15 },
		{ name: "appComment", src: appComment, id: 16 },
		{ name: "appSearch", src: appSearch, id: 17 },
		{ name: "appNotification", src: appNotification, id: 18 },
	],
};

export const textS = {
	newWave: [
		{ id: 1, text: "Html" },
		{ id: 2, text: "Css" },
		{ id: 3, text: "Javascript" },
		{ id: 4, text: "Jquery" },
	],
	instaWeb: [
		{ id: 1, text: "Javascript" },
		{ id: 2, text: "ReactJs" },
		{ id: 3, text: "NodeJs" },
		{ id: 4, text: "Apollo" },
		{ id: 5, text: "GraphQL" },
		{ id: 6, text: "Prisma" },
	],
	instaApp: [
		{ id: 1, text: "Javascript" },
		{ id: 2, text: "ReactNative" },
		{ id: 3, text: "Expo" },
		{ id: 4, text: "NodeJs" },
		{ id: 5, text: "Apollo" },
		{ id: 6, text: "GraphQL" },
		{ id: 7, text: "Prisma" },
	],
};

export const explan = {
	newWave: [
		{
			id: 1,
			text: `Cafe24를 통해 기존에 있던 브랜드 홈페이지를 레이아웃 시안을 받아서 구현한 홈페이지 입니다.`,
		},
		{
			id: 2,
			text: `메뉴에서 버튼을 통해서 넘어가는 형식은 제이쿼리 및 자바스크립트를 통해서 제작`,
		},
		{
			id: 3,
			text: `상품 디테일 란에 있는 슬라이드는 Swiper를 통해서 구현 하였습니다`,
		},
	],
	instaWeb: [
		{
			id: 1,
			text: `Instagram clone을 통하여 인스타그램에 있는 기본적인 기능들을 다루고 있습니다`,
		},
		{ id: 2, text: `회원 가입 및 로그인 기능` },
		{ id: 3, text: `포스팅 보기` },
		{ id: 4, text: `프로필 확인 및 수정 과 Axios를 이용하여 프로필 사진 업데이트` },
		{ id: 5, text: `팔로우 및 팔로잉 한 유저 확인` },
		{ id: 6, text: `메시지 목록 및 보내기 그리고 메시지 룸 형성` },
		{ id: 7, text: `게시물 좋아요 확인` },
		{ id: 8, text: `포스팅 및 유저 검색 기능` },
		{ id: 9, text: `Netlify를 통하여 웹 배포` },
		{ id: 9, text: `NodeJs + Express + Prisma를 이용하여 서버 구축` },
		{ id: 9, text: `GraphQL를 이용하여 필요한 기능 구축` },
		{ id: 9, text: `Multer를 통하여 업로드 되는 이미지 파일 S3로 전달` },
		{ id: 9, text: `Heroku를 통하여 배포` },
	],
	instaApp: [
		{
			id: 1,
			text: `InstaWebCloning 과 같은 서버를 사용하고 있으며 React Native와 Expo를 통해서 구현 하였습니다`,
		},
		{ id: 2, text: `인스타 웹 클론이 사용 가능 한 기능들 모두 구현` },
		{ id: 3, text: `사진첩에 접근 하고 이미지 업로드` },
	],
};

export const address = {
	newWave: "",
	instaWeb: "https://github.com/nerdnickim/prismagram-frontend",
	instaApp: "https://github.com/nerdnickim/prismagram-app",
	prismaServer: "https://github.com/nerdnickim/prismagram",
};

export const pageAddress = {
	newWave: "http://www.newwaveboys.co.kr/index.html",
	instaWeb: "https://cloninggram.netlify.app/#/",
	instaApp: "",
};
