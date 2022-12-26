export const state = () => ({
    siteName: 'REINFORCED AI',
    companyName: 'REINFORCED AI LIMITED',
    navItems: [
      { title: 'Services', to: '/services', },
      { title: 'Blog', to: '/', },
      { title: 'Training', to: '/training', },
      { title: 'About', to: '/about', },
      ],
      socialLinks: [
        {
          icon: 'mdi-facebook',
          url: 'https://facebook.com/reinforcedai',
          text: 'facebook',
        },
        {
          icon: 'mdi-twitter',
          url: 'https://twitter.com/reinforcedai',
          text: 'twitter',
        },
        {
          icon: 'mdi-instagram',
          url: 'https://www.instagram.com/reinforcedai_',
          text: 'instagram',
        },
        {
          icon: 'mdi-linkedin',
          url: 'https://www.linkedin.com/company/reinforcedai',
          text: 'linkedin',
        },
      ],
})
export const getters = {
    siteName: (state) => state.siteName,
    companyName: (state) => state.companyName,
    navItems: (state) => state.navItems,
    socialLinks: (state) => state.socialLinks,
}