import { HomePageItem } from '../models/homePage/homePageItem';

const getHomePageContent = async () => {
  try {
    const resp = await fetch(
      'https://nsvservices.azurewebsites.net/api/HomePageHero'
    );
    const data: HomePageItem[] = await resp.json();
    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const homePageService = {
  getHomePageContent,
};

export default homePageService;
