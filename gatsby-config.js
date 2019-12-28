module.exports = {
    siteMetadata:{
        title: 'Free Robotics',
        description: 'Project for developing ia and robotics in tlaxcala communities'
    },
    plugins: ['gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-plugin-mdx',
        options: {
            defaultLayouts : {
                default: require.resolve('./src/components/layout.js')
            }
        }
    },
    {
        resolve:'gatsby-source-filesystem',
        options:{
            name:'posts',
            path:'posts',
        }
    }
    ]
};