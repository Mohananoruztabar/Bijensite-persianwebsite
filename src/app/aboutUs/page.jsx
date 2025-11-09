"use client"
import React from 'react'
import Link from 'next/link'
import Container from '@/component/Container'
import { useState , useEffect , useRef } from 'react'
import AboutSlider from '@/component/AboutSlider'

function AboutUs() {

    const [scroll, setScroll] = useState(0)
    const [fillProgress , setFillProgress] = useState(0)
    const timelineRef = useRef(null)
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollPercent = (scrollTop / docHeight) * 100
            setScroll(scrollPercent)

            
            if (timelineRef.current) {
                const timelineTop = timelineRef.current.offsetTop
                const timelineHeight = timelineRef.current.offsetHeight
                const viewportHeight = window.innerHeight
                
                
                const scrollPosition = scrollTop + viewportHeight * 0.7
                const timelineStart = timelineTop
                const timelineEnd = timelineTop + timelineHeight
                
                if (scrollPosition > timelineStart && scrollPosition < timelineEnd) {
                    
                    const progress = ((scrollPosition - timelineStart) / (timelineHeight - viewportHeight * 0.3)) * 100
                    setFillProgress(Math.min(Math.max(progress, 0), 100))
                } else if (scrollPosition >= timelineEnd) {
                    setFillProgress(100)
                } else {
                    setFillProgress(0)
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isIconActive = (itemIndex) => {
        const thresholds = [10, 30, 50, 70, 90]
        return fillProgress >= thresholds[itemIndex]
    }

    
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] shape relative' style={{backgroundImage:'url("/bijan-history.jpg")'}}>
            <span className='bg-black/55 rounded-md px-4 py-2 absolute bottom-1/3 right-1/12 text-4xl text-white'>درباره ما</span>
            <div className='bg-black/55 rounded-md px-4 py-2 absolute bottom-4 right-1/12  text-white'>
              <Link className='hover:text-redd' href="/"><i className="ri-arrow-right-circle-line"></i>  Home</Link>
              <span className='mr-2'>درباره ما</span>
            </div>
        </div>
        <Container>
            <section className='shadow-xl rounded-4xl sm:mt-15 p-4 sm:p-6 md:p-8 bg-white h-[700px]' >
                <h3 className='text-2xl sm:text-3xl md:text-4xl mt-3'>تاریخچه</h3>
                <h4 className='mt-5 text-gray-700 text-xl sm:text-2xl md:text-3xl mb-3'>بیژن بنیانگذار تولید سس مایونز در ایران</h4>
                <p className='mb-4 text-gray-600 text-sm sm:text-base md:text-lg'>قدمت محصولات غذایی بیژن به سال 1348 بازمی گردد، اما پیش از آن مهندس بیژن مهاجرین (1400 – 1315) کار خود را از زیرزمین منزل‌اش آغاز کرده بود. آنچنان که خود می‌گوید وقتی برای تحصیلات عالی به آمریکا رفته بود، با اطلاعاتی که در زمینه سس سفید هنگام تحصیل یافته بود، در سال 1348 تولید این چاشنی را در کشور، با راه‌اندازی کارخانه دیاموند به مرحله اجرا گذاشت. کار در ابتدا با یک همزن و یک کارتن روغن در زیرزمین منزل شروع شد و برای نخستین مرتبه در ایران سس مایونز به بازار آمد.
                آن روزها وقتی یکی از رستوران‌های معروف تهران 2 کارتن مایونز سفارش داده بود، شادی مدت‌ها در وجودش موج می‌زد. پس از مدتی، زیرزمین به کارگاه کوچک 30متری در منطقه یوسف آباد تبدیل شد و این آغاز یک حرکت بزرگ بود. مهم‌ترین ویژگی‌های بیژن، نگاه به آینده و پشتکار بود تا بتواند این کار کوچک را به صنعتی بزرگ تبدیل کند.
                تلاش‌ها به ثمر نشست و مردم با سس مایونز آشنا شدند و همین موضوع سبب افزایش فروش سس دیاموند گردید. توجه عموم به مایونز روز به روز بیشتر می‌شد و سس دیاموند هر روز شناخته‌تر و محبوب‌تر می‌شد.</p>
                <p className='mb-4 text-gray-600 text-sm sm:text-base md:text-lg'>بیژن معتقد بود که باید همواره کیفیت را حفظ کرد و نوآوری را سرلوحه کار قرار داد. بر اساس همین تفکر سس کچاپ در ایران توسط این شرکت در سال 1349 به دست مردم رسید و یک سال بعد سس اسپاگتی تولید شد و سپس پنیر پیتزا روانه بازار شد. بدین ترتیب سس مایونز، سس کچاپ، سس ماکارونی و پنیر پیتزا برای نخستین مرتبه توسط «بیژن» در ایران تولید و ارائه شده است.</p>
                <p className='mb-4 text-gray-600 text-sm sm:text-base md:text-lg'>یژن نخستین شرکتی بود که از ظرف شیشه‌ای به جای قوطی فلزی برای عرضه خیار شور در سال 1356 استفاده کرد. هر چند در ابتدا با مخالفت شدید وزارت بهداری و موسسه استاندارد مواجه بود، اما برای نخستین مرتبه رب گوجه فرنگی نیز در سال 1358 با ظرف شیشه‌ای به بازار عرضه شد.</p>
                <p className='mb-4 text-gray-600 text-sm sm:text-base md:text-lg'>مدیریت جدید این واحد تولیدی بر عهده حسین مصطفی‌زاده است و هم چنین از سال 1393 سازمان فروش بیژن با مدیریت نرگس اله‌یاری، راه‌اندازی شده است. «بیژن» در این دوره سعی دارد با توسعه کارآفرینی و نیز تکیه بر دانش روز و نگاه به افق‌های دور، بتواند سهمی بسزا و اثرگذارتر از گذشته، در ارتقای سطح سلامت و تغذیه جامعه داشته باشد.
                آنچه که نام «بیژن» را نه تنها ماندگار کرده بلکه راه خود را در فراسوی مرزها گشود، ثبات در کیفیت و عرضه محصولات تازه از بهترین مواد اولیه و رعایت استانداردهای فراملی است</p>
                <p className='mb-4 text-gray-600 text-sm sm:text-base md:text-lg'>مروز نام «بیژن» برای مصرف کنندگان آرامش خاطر به همراه دارد و خوشنامی آن دسترنج بیش از پنجاه سال تلاش مستمر است.</p>
            </section>
            <section ref={timelineRef} className='mt-15 relative'>
                <div className='absolute right-1/2 transform translate-x-1/2 w-1 bg-gray-300 h-full z-0'>
                        <div 
                            className='bg-redd w-full transition-all duration-100'
                            style={{ height: `${fillProgress}%` }}
                        ></div>
                    </div>
                <article className='w-[510px] shadow-2xl rounded-4xl p-5 relative h-[540px]'>
                    <h3 className='text-center text-2xl text-gray-700 mb-2'>سال 1348 (1969میلادی)</h3>
                    <figure className='flex justify-center mt-3'>
                        <img src="/timeline-01.jpg" alt="" />
                    </figure>
                    <p className='mt-5'>در سال 1348 با راه‌اندازی کارخانه دیاموند برای نخستین مرتبه در ایران سس مایونز به بازار آمد.</p>
                    <p className='mt-2'>سس کچاپ در ایران توسط این شرکت در سال 1349 به دست مردم رسید و یک سال بعد سس اسپاگتی تولید شد و سپس پنیر پیتزا روانه بازار شد.
                    بدین ترتیب سس مایونز، سس کچاپ، سس ماکارونی و پنیر پیتزا برای نخستین مرتبه توسط «بیژن» در ایران تولید و ارائه شده است.</p>
                    <div className='absolute top-[50%] left-[-60%] flex items-center z-20'>
                            <div className={`data1 ${isIconActive(0) ? 'bg-redd text-white' : 'bg-white'}`}>
                                <i className="ri-calendar-line"></i>
                            </div>
                       <h3 className='text-center text-xl text-redd mb-2 mr-2 font-bold'>سال 1348 (1969میلادی)</h3>
                    </div>
                </article>
                <article className='w-[510px] shadow-2xl rounded-4xl p-5 relative flex flex-col justify-start h-[540px]' style= {{marginLeft: '0', marginRight: 'auto' }}>  
                    <h3 className='text-center text-2xl text-gray-700 mb-2'>سال 1368 (1990میلادی)</h3>
                    <figure className='flex justify-center mt-3'>
                        <img className='w-[340px]' src="/timeline-02-600x441.jpg" alt="" />
                    </figure>
                    <p className='mt-5'>برند دیاموند و بیژن با تولید انواع سس‌های گرم و سرد و همچنین رب گوجه‌فرنگی در بسته‌بندی‌های متنوع با استقبال بی‌نظیر مردم مواجهه شد. بیژن فعالیت خود را گسترش داد و انواع خیار شور، آبلیمو، آبغوره را روانه بازار کرد. بیژن نخستین شرکتی بود که از ظرف شیشه‌ای به جای قوطی فلزی برای خیار شور و رب استفاده کرد.</p>
                    <div className='absolute top-[50%] right-[-60%] flex items-center z-20'>
                        <h3 className='text-center text-xl text-redd mb-2 ml-2 font-bold'>سال 1368 (1990میلادی)</h3>
                        <div className={`data1 ${isIconActive(1) ? 'bg-redd text-white' : 'bg-white'}`}>
                            <i className="ri-calendar-line"></i>
                        </div>
                    </div>
                </article>
                <article className='w-[510px] shadow-2xl rounded-4xl p-5 relative h-[540px]'>
                    <h3 className='text-center text-2xl text-gray-700 mb-2'>سال 1378 (2000میلادی)</h3>
                    <figure className='flex justify-center mt-3'>
                        <img className='w-[340px]' src="/timeline-03-600x441.jpg" alt="" />
                    </figure>
                    <p className='mt-5'>بعد از موفقیت‌های روزافزون، بیژن طعم‌های جدید سس را عرضه نمود. سس تازلند آیلند که امروزه به نام سس «هزارجزیره» عرضه می‌شود، اولین بار توسط بیژن تولید شد. سس خردل نیز طعم جدیدی بود که هموطنان آن را پسندیدند.</p>
                    <div className='absolute top-[50%] left-[-60%] flex items-center z-20'>
                        <div className={`data1 ${isIconActive(2) ? 'bg-redd text-white' : 'bg-white'}`}>
                            <i className="ri-calendar-line"></i>
                        </div>
                       <h3 className='text-center text-xl text-redd mb-2 mr-2 font-bold'>سال 1378 (2000میلادی)</h3>
                    </div>
                </article>
                <article className='w-[510px] shadow-2xl rounded-4xl p-5 relative flex flex-col justify-start h-[540px]' style= {{marginLeft: '0', marginRight: 'auto' }}>  
                    <h3 className='text-center text-2xl text-gray-700 mb-2'>سال 1388 (2010میلادی)</h3>
                    <figure className='flex justify-center mt-3'>
                        <img className='w-[340px]' src="/timeline-04-600x441.jpg" alt="" />
                    </figure>
                    <p className='mt-5'>کیفیت، تنوع محصولات و بسته‌بندی مدرن، بیژن را به یکی از بهترین تولیدکنندگان مواد غذایی تبدیل کرد. در سراسر ایران فروشگاهی نبود که نشانی از بیژن نداشته باشد. بیژن برای انواع سلایق حرفی برای گفتن داشت.</p>
                    <div className='absolute top-[50%] right-[-60%] flex items-center z-20'>
                        <h3 className='text-center text-xl text-redd mb-2 ml-2 font-bold'>سال 1388 (2010میلادی)</h3>
                        <div className={`data1 ${isIconActive(3) ? 'bg-redd text-white' : 'bg-white'}`}>
                            <i className="ri-calendar-line"></i>
                        </div>
                    </div>
                </article>
                <article className='w-[510px] shadow-2xl rounded-4xl p-5 relative h-[540px]'>
                    <h3 className='text-center text-2xl text-gray-700 mb-2'>سال 1398 (2020میلادی)</h3>
                    <figure className='flex justify-center mt-3'>
                        <img className='w-[340px]' src="/timeline-05-400x294.jpg" alt="" />
                    </figure>
                    <p className='mt-3'>آنچه که نام «بیژن» را نه تنها ماندگار کرده بلکه راه خود را در فراسوی مرزها گشوده است، ثبات در کیفیت و عرضه محصولات تازه از بهترین مواد اولیه و رعایت استانداردهای فراملی است. امروز نام «بیژن» برای مصرف‌کنندگان آرامش خاطر به همراه دارد و خوشنامی آن دسترنج بیش از پنجاه سال تلاش مستمر است.</p>
                    <p className='mt-3'>شرکت بین‌المللی بیژن، امروز تقریبا همه محصولات غذایی مورد نیاز یک خانواده را تولید و تامین می‌کند. به غیر از انواع سس، کنسروجات، مرباها، ترشیجات، روغن، عسل، سرکه و کشک در کارخانجات صنایع غذایی بیژن تهیه می‌شوند و در خدمت مصرف‌کنندگان و همراهان قدیمی «بیژن» قرار می‌گیرند</p>
                    <div className='absolute top-[50%] left-[-60%] flex items-center z-20'>
                        <div className={`data1 ${isIconActive(4) ? 'bg-redd text-white' : 'bg-white'}`}>
                            <i className="ri-calendar-line"></i>
                        </div>
                       <h3 className='text-center text-xl text-redd mb-2 mr-2 font-bold'>سال 1398 (2020میلادی)</h3>
                    </div>
                </article>
            </section>
            <section className='shadow-2xl rounded-3xl grid grid-cols-1 lg:grid-cols-2 bg-white mt-15 p-3 pb-10'>
                <div className='px-6'>
                    <h3 className='text-gray-600 text-2xl sm:text-3xl md:text-4xl mt-3'>سخن مدیرعامل</h3>
                    <p className='mt-3 text-gray-700 text-sm sm:text-base md:text-lg'>در دنیای امروز با سرعت و رشد تکنولوژی الزامات بازنگری در شیوه مدیریت اجتناب‌ناپذیر است. دانش و تخصص، فن‌آوری و خلاقیت و به‌روز بودن، از ابزارهای این رشد است. اما آنچه که بیش از موارد یاد شده اهمیت دارد، توجه مسئولانه به نیاز مشتریان، به منظور کسب رضایتمندی آنهاست که شرکای حقیقی ما محسوب می‌شوند.</p>
                    <p className='mt-3 text-gray-700 text-sm sm:text-base md:text-lg'>«بیژن» اکنون در کنار پرسنلی همراه و خانواده‌ای همدل و منسجم، راهی امیدوارکننده را طی کرده و علاوه بر پاسخگویی به نیاز داخلی در عرصه جهانی خوش درخشیده است و محصولات بیژن در کنار برندهای بین‌المللی خودنمایی می‌کند.</p>
                    <p className='mt-3 text-gray-700 text-sm sm:text-base md:text-lg'>این همراهی در آینده نزدیک با گسترش و توسعه کمی و کیفی در مشارکت کارآفرینی ملی، نقش قابل توجهی را ایفا خواهد کرد، چون تلاش‌مان معطوف بر توسعه همه‌جانبه است تا با ارتقای سطح بهداشت غذایی جامعه، هم کشور از ورود کالاهای مشابه بی‌نیاز شود و هم مصرف‌کنندگان از کیفیتی مطمئن برخودار باشند.</p>
                    <p className='mt-3 text-gray-700 text-sm sm:text-base md:text-lg'>تجربه بیش از نیم قرن، همراه با نگرش به آینده در سایه تلاش و پشتکار، رویاهای ما را دست‌یافتنی کرده است. فصل‌های زیبای پیش روی بیژن در کنار شما شیرین‌تر خواهد بود.</p>
                </div>
                <figure className='flex justify-end mt-5 lg:mt-0'>
                    <img className='rounded-2xl sm:w-[400px] md:w-[500px]' src="/bijan-ceo.jpg" alt="" />
                </figure>
            </section>
            <section className='shadow-2xl rounded-3xl grid grid-cols-1 lg:grid-cols-2 bg-white mt-15 p-3 pb-10'>
                <div className='px-6'>
                    <h3 className='text-gray-600 text-2xl sm:text-3xl md:text-4xl mt-3'>ماموریت</h3>
                    <p className='mt-3 text-gray-700 text-sm sm:text-base md:text-lg'>در تلاش هستیم تا محصولات غذایی‌مان، مطابق با ذائقه و در شأن مصرف‌کننده باشد. در این راه از دانش روز دنیا بهره می‌گیریم و پرسنل مجرب و جوان را در محیط کاری پویا به کار می‌گیریم تا با استفاده از بهترین مواد اولیه، خدمتی درخور ارائه دهیم، به نحوی که ضمن بی‌نیاز کردن کشور از ورود محصولات مشابه خارجی، در بازارهای جهانی نیز حضور فعال داشته باشیم و به عنوان یک بازیگر اثرگذار در صنایع غذایی مطرح شویم. هم‌چنین پاسداشت عناصر طبیعی و احترام به محیط زیست در تمامی مراحل این فعالیت‌ها، در دستور کارمان قرار دارد.</p>
                    <h3 className='text-gray-600 text-2xl sm:text-3xl md:text-4xl mt-3'>چشم‌انداز</h3>
                    <p className='mt-3 text-gray-700 text-sm sm:text-base md:text-lg'>صنایع غذایی بیژن در تلاش است تا در آینده‌ای نزدیک به جایگاه بزرگ‌ترین و محبوب‌ترین شرکت صنایع غذایی کشور تبدیل شود و با توسعه روزافزون خود در بخش‌های مختلف، به بیش از 10هزار پرسنل نائل گردد.</p>
                </div>
                <figure className='flex justify-end'>
                    <img className='rounded-2xl' src="/mision-and-vision.webp" alt="" />
                </figure>
            </section>
            <AboutSlider />
        </Container>
    </div>
  )
}

export default AboutUs