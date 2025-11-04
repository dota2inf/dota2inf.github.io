## 1) FOR GIT PUSH go to - root

## 2) FOR DEVELOPMENT go to - ./app - yarn live / yarn build / yarn storybook / yarn build-storybook

## 3) node -v ---> v22.15.0

## 4) install packages ---> use yarn (install it globally) instead of npm

## 5) how run - need to use lite-server or
    npx http-server ./
    npx http-server ./app/storybook-static

## 6) [structure] components -> pages

    assets - use it for storing files, images, fonts, PDFs, and more.
    components - basic components
    modals - modals
    pages - these are pages that we open through the router.
    store - redux store (recomend to use Redux DevTools pluggin in chrome)
    styles - global styles
    svg - svg icons
    translate - translate file
    utils - utils functions

## 7) classNames page_Main_regirtrationTitle-bold

## 8) imports added in 'vite.config.ts' 'tsconfig.json'

    used imports:
        "assets/*": ["assets/*"],
        "components/*": ["components/*"],
        "modals/*": ["modals/*"],
        "pages/*": ["pages/*"],
        "store/*": ["store/*"],
        "styles/*": ["styles/*"],
        "svg/*": ["svg/*"],
        "translate/*": ["translate/*"],
        "utils/*": ["utils/*"]

## 9) router - ./src/router.tsx

## 10) modals - to set modal use -> const openModal = useModal(); / openModal(ConfirmEmail, {mail: signMail,password: signPass});

## 11) confirm openConfirm(({ close }) => (<div onClick={() => close()} />));


## 12)  Languages
        -) languages to go to utils/i18n.ts (two places)
        -) lang file located in ./translate/
        -) to switch language use - customChangeLanguage

## 13) URL for request - use cloudflare worker service to fix CORS error 

## 14)  REQUESTS

      // Item List (MOCKED)
      // https://www.dota2.com/datafeed/itemlist?language=english
      // https://www.dota2.com/datafeed/itemlist?language=spanish
      // https://www.dota2.com/datafeed/itemlist?language=italian

      // Item Details (Blink Dagger id: 1)
      // https://www.dota2.com/datafeed/itemdata?language=english&item_id=1
      // https://www.dota2.com/datafeмed/itemdata?language=spanish&item_id=1
      // https://www.dota2.com/datafeed/itemdata?language=italian&item_id=1

      // Hero List (MOCKED) no need other languages
      // https://www.dota2.com/datafeed/herolist?language=english

      // Hero Details (Anti-Mage id: 1)
      // https://www.dota2.com/datafeed/herodata?language=english&hero_id=1
      // https://www.dota2.com/datafeed/herodata?language=spanish&hero_id=1
      // https://www.dota2.com/datafeed/herodata?language=italian&hero_id=1

      // Patch Notes List
      // https://www.dota2.com/datafeed/patchnoteslist?language=english
      // https://www.dota2.com/datafeed/patchnoteslist?language=spanish
      // https://www.dota2.com/datafeed/patchnoteslist?language=italian

      // Patch Notes (7.29d)
      // https://www.dota2.com/datafeed/patchnotes?language=english&version=7.29d
      // https://www.dota2.com/datafeed/patchnotes?language=spanish&version=7.29d
      // https://www.dota2.com/datafeed/patchnotes?language=italian&version=7.29d


