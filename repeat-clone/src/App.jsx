import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import YellowSection from './components/yellowSection/YellowSection'
import Card from './components/card/Card'
import PageSection from './components/pageSection/PageSection'

function App() {
    const content = [
        {
            title: 'SUPERCHARGED LIFECYCLE MARKETING',
            desc: 'Repeat boosts repurchase rate by automatically delivering personalized messaging at high-leverage Moments™.',
        },
        {
            title: 'UNLOCK YOUR CUSTOMER MOMENTS',
            desc: 'Start activating the Moments that matter. Get started now to see how Repeat can simplify and supercharge your retention workflow.',
        },
        {
            title: 'DRIVE MORE SECOND ORDERS WITH MOMENTS THAT MATTER',
            desc: 'Repeat monitors when customers enter key Moments—think cross-selling, replenishment, lapsing—and passes that intelligence to the email and SMS platforms you use today. The result is more personalized campaigns, smarter flows, and an easier retention workflow. Moments make it a breeze to create the kind of hyper-personalized messaging that used to require complicated if/else logic, rigid timing, and burdensome setup.',
            src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/36a6aadd-6a11-477b-add0-c08398170243/predicted_next_order/w=750,quality=80,fit=scale-down',
            alt: 'Alt text',
            subTitle: 'FEATURED MOMENTS',
            cards: [
                {
                    class: 'card',
                    title: 'Replenishment Moment',
                    desc: 'Customers in this Moment are ready to buy more of a product they’ve bought before.',
                    btnText: 'Explore Replenishment',
                },
                {
                    class: 'card',
                    title: 'About to Lapse Moment',
                    desc: 'Customers in this Moment are at risk of lapsing permanently',
                    btnText: 'Explore About to Lapse',
                },
                {
                    class: 'card',
                    title: 'Cross-sell Moment',
                    desc: 'Customers in this Moment are primed to explore more of your product catalog.',
                    btnText: 'Explore Cross-sell',
                },
                {
                    class: 'card',
                    title: 'Subscription Upsell Moment',
                    desc: 'Customers in this Moment are primed to commit to recurring orders',
                    btnText: 'Explore Subscription',
                }
            ],
        },
        {
            title: 'ACTIVATE MOMENTS WITH PLAYS',
            desc: `The key to simplifying your work without sacrificing performance: ready-made Plays, like Moment-specific flows, dynamic email banners, and personalized direct mail, make it easy to leverage the Moments that Repeat surfaces. They’ll help you quickly create campaigns and flows that resonate with your customers, no matter what stage of the lifecycle they’re in.`,
            src: 'https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/602e95fc-793e-49e0-a802-8ce0b84c1d48/activate_moments_with_plays/w=750,quality=80,fit=scale-down',
            alt: 'Alt text',
            subTitle: 'FEATURED PLAYS',
            btnText: 'Explore more goals',
            cards: [
                {
                    class: 'card',
                    title: 'Automatically Reach Subscription-Ready Customers',
                    moment: 'Subscription Upsell Moment',
                    desc: 'Identify and connect with customers on the verge of placing a subscription order via email or SMS',
                    btnText: 'Explore this play',
                    tags: [
                        {
                            text: 'Email',
                            color: '#E2D8FF',
                        },
                        {
                            text: 'SMS',
                            color: '#E2D8FF',
                        },
                        {
                            text: 'Flow',
                            color: '#C3D5FC',
                        },
                    ]
                },
                {
                    class: 'card',
                    title: 'Cross-sell Predicted Products',
                    moment: 'Cross-sell Moments',
                    desc: `Nudge customers towards their next purchase when they're primed for a cross-sell`,
                    btnText: 'Explore this play',
                    tags: [
                        {
                            text: 'Email',
                            color: '#E2D8FF',
                        },
                        {
                            text: 'SMS',
                            color: '#E2D8FF',
                        },
                        {
                            text: 'Flow',
                            color: '#C3D5FC',
                        },
                    ]
                },
                {
                    class: 'card',
                    title: 'Replenishment Reminder Banner',
                    moment: 'Replenishment Moment',
                    desc: 'Add dynamic text to any flow or campaign email to remind customers to reorder specific products',
                    btnText: 'Explore this play',
                    tags: [
                        {
                            text: 'Email',
                            color: '#E2D8FF',
                        },
                        {
                            text: 'Reusable Block',
                            color: '#C3D5FC',
                        },
                    ]
                },
            ],
            smallCards: [
                {
                    class: 'card',
                    title: 'Decrease customer churn',
                    desc: 'Save customers at risk of lapsing',
                    btnText: 'Explore play',
                },
                {
                    class: 'card',
                    title: 'Encourage Cross-Sells',
                    desc: 'Help customers explore your products',
                    btnText: 'Explore play',
                },
                {
                    class: 'card',
                    title: 'Boost returning customer rate',
                    desc: 'Keep customers coming back',
                    btnText: 'Explore play',
                },
            ]
        }
    ]
    const favoritBrandsCard = [
        {
            class: 'card-large',
            src: 'https://www.drsquatch.com/cdn/shop/products/20210217_DrSquatch_LifestylePhotos_Outdoor_4933.jpg?v=1705422082',
            title: 'Increased 90-day repeat orders by 10%',
            desc: `"Personalized timing powering direct mail helped us reach our customers at the right moment to really amplify second purchases”`,
            author: 'Dejan Rankovic, Sr. Director of Growth',
            brand: 'Dr. Squatch',
            btnText: 'Read More'
        },
        {
            class: 'card-large',
            src: 'https://static.thcdn.com/productimg/960/960/12914679-1244857528436845.jpg',
            title: '2x revenue per session from replen flows',
            desc: `“Truly, it’s helped the repeat purchase rate because we now know when someone might need to replenish.”`,
            author: 'Amber Reyes, Sr Mgr, Acquisition & Media',
            brand: 'Kopari Beauty',
            btnText: 'Read More'
        },
        {
            class: 'card-large',
            src: 'https://blackgirlvitamins.co/cdn/shop/files/prenatalstuff_4_620x.jpg?v=1708078338',
            title: 'Improved margins for returning customers',
            desc: `"The product works. It does what it's supposed to do with minimal effort from our team."`,
            author: 'Nnamdi Ugwu, Co-Founder ',
            brand: 'Black Girl Vitamins',
            btnText: 'Read More'
        }
    ]
    const readMoreCards = [
        {
            class: 'card-large',
            src: './src/assets/mail.svg',
            title: 'How to Quickly Build a Replenishment Flow',
            desc: `The cost of a personalized replenishment flow is almost always a mess of branching logic and a ton of someone's time. But not anymore.`,
            btnText: 'Read More'
        },
        {
            class: 'card-large',
            src: './src/assets/phone.svg',
            title: 'How Do You Measure and Improve Your Retention Strategy With Data?',
            desc: `With acquisition becoming increasingly difficult and expensive, using your data to inform a solid retention strategy is more important than ever.`,
            btnText: 'Read More'
        },
        {
            class: 'card-large',
            src: './src/assets/bubble.svg',
            title: 'Improved margins for returning customers',
            desc: `These are the three types of moments you have to activate your existing customer base: cultural, manufactured, and customer moments.`,
            btnText: 'Read More'
        },
    ]

    return (
        <div>
            <Header />
            <YellowSection content={content[0]} />

            <section className='favorit-brand'>
                <h2 className="page-section__title"> YOUR FAVORITE BRANDS ARE HAVING A MOMENT </h2>
                <div className='card-container'>
                    {
                        favoritBrandsCard.map((card, index) => {
                            return <Card
                                card={card}
                                key={index} />
                        })
                    }
                </div>
                <div className='brand-container'>
                    <img src='https://images.squarespace-cdn.com/content/v1/628e522470da5a1e44191728/1674564513157-VTXPMID8PYKVUDZ1LA0Y/98S_Client_Logos_2.jpg' alt='logo' className='brand__card' />
                    <img src='https://assets-global.website-files.com/6272f0e0b83949786cb08887/62759cadacfe836176685585_aurabora.png' alt='logo' className='brand__card' />
                    <img src='https://d2iiahg0ip5afn.cloudfront.net/logos/4310/4697414.hydrant.jpg' alt='logo'
                        className='brand__card' />
                    <img src='https://flipfit-cdn.akamaized.net/flipfit-prod-tmp/brand/6052a4c614b73b0014eebfdb/1616028870218.webp' alt='logo' style={{ backgroundColor: 'black' }}
                        className='brand__card' />
                </div>

            </section>

            <PageSection
                color={"#EDE7E2"}
                content={content[2]}
            />
            <PageSection
                color={"#ffffff"}
                content={content[3]}
            />

            <section className='drive-more' style={{ backgroundColor: '#EDE7E2' }}>
                <section className='page-section__content'>
                    <h2 className="page-section__title"> HOW REPEAT WORKS </h2>

                    <article className='page-section__grid'>
                        <div>
                            <h3 className="page-section__sub-title"> INGEST AND ANALYZE </h3>
                            <p className='page-section__text-content'> Repeat connects to your Shopify store to ingest all of your historical orders and each new order that your customers place. We analyze those orders at the store level to identify trends and at the customer level to understand individual behavior. </p>
                        </div>
                        <img src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/6ca568be-9c8f-47b7-bdd2-c1cac61e03bd/ingest_and_anlyze/w=750,quality=80,fit=scale-down" alt="" className='page-section__image' />
                    </article>

                    <article className='page-section__grid'>
                        <div>
                            <h3 className="page-section__sub-title"> TRANSFORM AND REPORT </h3>
                            <p className='page-section__text-content'> Repeat feels like magic, but we're not a black box. We utilize your store's data to produce valuable insights and reports that help you level up your retention strategy with the same intelligence that fuels Repeat's tools. </p>
                        </div>
                        <img src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/d72ba5ba-bcd6-46a5-a7f4-26850e0e5cf2/transform_and_report/w=750,quality=80,fit=scale-down" alt="" className='page-section__image' />
                    </article>

                    <article className='page-section__grid'>
                        <div>
                            <h3 className="page-section__sub-title">AUTOMATE AND ACT </h3>
                            <p className='page-section__text-content'> Repeat generates events that you can use to automate flows and enriches customer profiles with data for personalization and segmentation. It all flows seamlessly into Klaviyo, Postscript, and Attentive to give you new ways to optimize your retention workflow. </p>
                        </div>
                        <img src="https://images.spr.so/cdn-cgi/imagedelivery/j42No7y-dcokJuNgXeA0ig/2790cf29-d061-46d3-a61d-905c274d2054/automate_and_act/w=750,quality=80,fit=scale-down" alt="" className='page-section__image' />
                    </article>
                </section>
            </section>

            <section className='read-more'>
                <h2 className="page-section__title"> READ MORE </h2>
                <div className='card-container'>
                    {
                        readMoreCards.map((card, index) => {
                            return <Card card={card} key={index} />
                        })
                    }
                </div>
            </section>

            <YellowSection content={content[1]} />
            <Footer />
        </div>

    )
}

export default App
