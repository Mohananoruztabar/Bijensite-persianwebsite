import Container from '@/component/Container'
import React from 'react'

function Export() {
  return (
    <div>
        <div className='bg-cover bg-center shadow-xl h-[280px] shape relative' style={{backgroundImage:'url("/online-programming-course-hero-section-bg.svg")'}}>
            <div className='absolute top-0 left-0 w-full h-full bg-black/30 shape'></div>
            <span className='px-4 py-2 rounded-xl absolute bottom-10 bg-black/50 right-1/12 text-4xl text-white'>صدای مشتریان</span>
        </div>
        <Container>
            <section className='shadow-2xl rounded-3xl bg-white p-15 mt-20 group'>
                <figure className='flex justify-center'>
                    <img className='rounded-3xl w-full max-w-[800px] object-cover' src="/export-department.webp" alt="" />
                </figure>
                <p className='mt-10 text-xl leading-relaxed text-justify'>دپارتمان صادرات شرکت بیژن با هدف بهبود دسترسی به بازارهای جهانی و ارتقاء محصولات در سطح بین‌المللی پایه‌گذاری گردید. انتقال دو سویه دستاوردهای صنعت غذایی، از طریق ارتباط و صادرات محصولات بیژن به بازارهای بین‌المللی با تمرکز بر ایجاد روابط بین‌المللی پایدار از اهداف شرکت بیژن می‌باشد. بیژن به عنوان یکی از پیشگامان صنعت تولید مواد غذایی، با افتخار طعم سفره‌های ایرانی را به دنیا معرفی می‌کند. هدف بیژن افزایش حضور در بازارهای بین‌المللی و به دنبال آن ایجاد پل ارتباطی بین فرهنگ‌ها و توسعه بازارهای جدید برای محصولات خود می‌باشد. ماموریت ما در صادرات محصولات، ارتقاء سطح فرهنگی و تغذیه‌ای در سراسر جهان است. دپارتمان صادرات بیژن توانسته‌است از تجارب موفقی مانند: بازاریابی موفق و موثر در حوزه جهانی و دسترسی به بازارهای بین‌المللی بهره‌مند گردد و با افتخار، در توسعه بازارهای جدید و افزایش حجم صادرات و برقراری ارتباطات موثر با مشتریان خود قدم بردارد. استراتژی ما تحلیل دقیق بازارهای هدف و ارائه محصولات متنوع با توجه به تفاوت‌های فرهنگی در سطح جهانی و متناسب با سلیقه‌های منحصر به فرد در بازارهای بین‌‍‌المللی و نیز براساس، توسعه روابط و به‌کارگیری فناوری‌های نوین در فرآیند صادرات می‌باشد. در حال حاضر هلدینگ بیژن با صادرات محصولات خود به کشورهایی نظیر کانادا، آلمان، هند، مالزی، استرالیا، کشورهای حوزه CIS، کشورهای حاشیه خلیج فارس و کشورهای خاورمیانه توانسته‌است سهم بزرگی از صادرات محصولات غذایی کشور عزیزمان ایران را داشته‌باشد.</p>
                <div className='text-center mt-10'>
                    <i className="ri-phone-fill text-6xl text-gray-700 group-hover:text-redd"></i>
                    <h4 className='text-3xl text-gray-700 mt-5'>(2739 داخلی) 61966-021</h4>
                    <p className='text-gray-700 text-xl font-bold mt-5'>کارشناسان دپارتمان صادرات بیژن آماده مشاوره و پاسخگویی به شما هستند.</p>
                </div>
            </section>
        </Container>
    </div>
  )
}

export default Export