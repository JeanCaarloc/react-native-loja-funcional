import { Banner } from "../types/banner";

type Data = {
    banners: Banner[],
};

export const data: Data = {
    banners: [
        {
            id: 1,
            image: require('../assets/bannerMake.png')
        },
        {
            id: 2,
            image: require('../assets/bannerMae.png')
        },
        {
            id: 3,
            image: require('../assets/bannerInfluencer.png')
        },
    ],

}