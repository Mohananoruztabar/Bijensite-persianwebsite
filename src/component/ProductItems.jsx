import React from 'react'
import Link from 'next/link'
import Container from './Container'

function ProductItems(props) {
  return (
    <div>
        <Container>
            <section className='mt-15 grid grid-cols-1 lg:grid-cols-3'>
                <figure className='grid col-span-1'>
                    <img className='w-full h-aut' src={props.img} alt="" />
                </figure>
                <div className='col-span-2 mt-5 lg:mt-0'>
                    <ul className='flex gap-2 h-fit rounded-xl pb-2 border border-trans'>
                        <li className='hover:text-redd'>
                            <Link href="/">Home «</Link>
                        </li>
                        <li className='hover:text-redd'>
                            <Link href="/store">Products «</Link>
                        </li>
                        <li>{props.name}</li>
                    </ul>
                    <h3 className='text-redd text-2xl sm:text-3xl font-bold mt-5'>{props.name}</h3>
                    {
                        props.text && 
                        <p className='text-gray-700 text-base sm:text-lg mt-5 leading-relaxed whitespace-pre-line'>{props.text}</p>
                    }
                    {
                        props.Ingredients &&
                        <>
                           <h4 className='font-bold text-xl sm:text-2xl mt-5'>ترکیبات:</h4>
                           <p className='text-gray-700 text-base sm:text-lg mt-3 leading-relaxed w-[70%]'>{props.Ingredients}</p>
                        </>
                    }
                    {
                        props.Properties && (
                            <>
                                <h4 className='font-bold text-xl sm:text-2xl mt-5'>خواص عسل طبیعی:</h4>
                                <p className='text-gray-700 text-base sm:text-lg mt-3  leading-relaxed'>{props.Properties}</p>
                            </>
                        )
                    }
                    {
                        props.Capacity && (
                           <>
                                <h4 className='text-xl sm:text-2xl mt-5'>مشخصات این محصول: </h4>
                                <p className='text-gray-700 text-base sm:text-lg mt-5 leading-relaxed'><strong className='text-xl'> مواد اصلی: </strong>{props.Main}</p> 
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'><strong className='text-xl'>حجم: </strong>{props.Capacity}</p> 
                                <h4 className='text-xl sm:text-2xl font-bold mt-5'> ویژگی‌ها: </h4>
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed mt-5'><strong className='text-xl'>طعم ملایم و اسیدیته استاندارد: </strong>{props.para1}</p>  
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'><strong className='text-xl'>کاربردهای متنوع: </strong>{props.para2}</p>  
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'><strong className='text-xl'>بدون مواد افزودنی: </strong>{props.para3}</p>  
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'><strong className='text-xl'>بسته‌بندی: </strong>{props.para4}</p> 
                           </> 
                        )
                    }
                    {
                        props.TypeRice && (
                            <>
                              <h4 className='text-md sm:text-xl mt-5 font-bold '> ویژگی‌های محصول:</h4>
                                <p className='text-gray-700 text-base sm:text-lg mt-4  leading-relaxed'><strong className='text-xl'>نوع برنج: </strong>{props.TypeRice}</p> 
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'><strong className='text-xl'>محل تولید: </strong>{props.PlaceOfProduction}</p> 
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'><strong className='text-xl'>بسته‌بندی: </strong>{props.packing}</p> 
                                <p className='text-gray-700 text-base sm:text-lg leading-relaxed'><strong className='text-xl'>ویژگی خاص: </strong>{props.Specialبeature}</p> 
                                <p className='text-gray-700 text-base sm:text-lg mt-2 leading-relaxed'>{props.p1}</p> 
                                <p className='text-gray-700 text-base sm:text-lg mt-2 leading-relaxed'>{props.p2}</p> 
                            </>
                        )
                    }
                    {
                        props.benefits && (
                          <>
                            <h4 className='text-2xl sm:text-3xl mt-5'>مزایای سرکه سفید: </h4>  
                            <p className='text-gray-700 text-base sm:text mt-5 leading-relaxed whitespace-pre-line'>{props.benefits}</p>
                          </>  
                        )
                    }
                    {
                        props.Usage &&
                        <>
                            <h4 className='text-2xl sm:text-3xl mt-5'>موارد مصرف:</h4>  
                            <p className='text-gray-700 text-base sm:text mt-5 leading-relaxed whitespace-pre-line'>{props.Usage}</p>
                        </>
                    }
                    {
                        props.StorageConditions &&
                        <>
                            <h4 className='text-2xl sm:text-3xl mt-5'>شرایط نگهداری:</h4>  
                            <p className='text-gray-700 text-base sm:text mt-5 leading-relaxed whitespace-pre-line'>{props.StorageConditions}</p> 
                        </>
                    }
                    {
                        props.Oiltype && (
                            <>
                               <h4 className='text-lg sm:text-xl mt-5 font-bold'> مشخصات محصول:</h4> 
                               <p className='text-gray-700 text-sm sm:text-lg mt-4 leading-relaxed'><strong className='text-base sm:text-xl'>نوع روغن: </strong>{props.Oiltype}</p> 
                               <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>حجم: </strong>{props.Volume}</p> 
                               <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>نوع بسته‌بندی: </strong>{props.TypeOfPackaging}</p> 
                               <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>تولیدکننده: </strong>{props.producer}</p> 
                            </>
                        )
                    }
                    {
                        props.Feature1 && (
                            <>
                                <h4 className='text-lg sm:text-xl mt-5 font-bold '>  ویژگی‌ها:</h4>
                                <p className='text-gray-700 text-sm sm:text-lg mt-4 leading-relaxed'><strong className='text-base sm:text-xl'> مناسب برای مصارف صنعتی و تجاری: </strong>{props.Feature1}</p> 
                                <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>کیفیت بالا: </strong>{props.Feature2}</p> 
                                <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>مقاومت در برابر حرارت: </strong>{props.Feature3}</p> 
                            </>
                        )
                    }
                    {
                        props.MainIngredients && (
                            <>
                                
                                <p className='text-gray-700 text-sm sm:text-lg mt-5 leading-relaxed'><strong className='text-base sm:text-xl'> مواد اصلی: </strong>{props.MainIngredients}</p> 
                                <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>وزن: </strong>{props.weight}</p> 
                                <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>ترکیبات جانبی: </strong>{props.SideEffects}</p>  
                                <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>بسته‌بندی: </strong>{props.packaging}</p>  
                                <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>مصرف: </strong>{props.consumption}</p>  
                                <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>ارزش غذایی: </strong>{props.NutritionalValue}</p>  
                            </>
                        )
                    }
                    {
                        props.expirationDate && (
                            <>
                               <h4 className='text-lg sm:text-xl mt-5 font-bold'> نکات مهم:</h4>
                               <p className='text-gray-700 text-sm sm:text-lg mt-4 leading-relaxed'><strong className='text-base sm:text-xl'>تاریخ انقضا: </strong>{props.expirationDate}</p> 
                               <p className='text-gray-700 text-sm sm:text-lg leading-relaxed'><strong className='text-base sm:text-xl'>شرایط نگهداری: </strong>{props.StorageConditions}</p> 
                            </>
                        )
                    }
                    {
                        props.Weight && 
                        <>
                            <h4 className='text-lg sm:text-2xl mt-10'>وزن:</h4>
                            <span className='text-gray-700 text-base sm:text-xl mt-5'>{props.Weight} گرم</span>
                        </>
                    }
                    {
                        props.Energy && 
                        (
                            <>
                                <h4 className='text-2xl sm:text-3xl mt-5'>جدول ارزش غذایی:</h4>
                                <p className='text-base sm:text-xl mt-5 text-gray-700'>هر قاشق غذاخوری {props.name} (15گرم)</p>
                                <table className="w-full mt-5">
                                    <tbody>
                                        <tr>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">انرژی</td>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">{props.Energy} کیلوکالری</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">قند</td>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">{props.Sugar} گرم</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">چربی</td>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">{props.Fat} گرم</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">نمک</td>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">{props.Salt} گرم</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">اسیدهای چرب ترانس</td>
                                            <td className="border border-trans text-sm sm:text-lg p-2 sm:p-3">{props.Transfattyacids} گرم</td>
                                        </tr>
                                    </tbody>
                               </table>
                            </>
                        )
                    }
                    {
                        props.image && 
                        <> 
                            <figure className='mt-15'>
                                <img className='w-[400px]' src={props.image} alt="" />
                            </figure>
                        </>
                    }
                    <Link href="https://www.digikala.com/brand/bijan/" target="_blank">
                        <button className="bg-red-700 text-base sm:text-xl mt-10 text-white w-[80%] py-1 cursor-pointer rounded-md hover:bg-white hover:text-red-700 hover:shadow-xl"> خرید آنلاین</button>
                    </Link>
                </div>
            </section>
        </Container>
    </div>
  )
}

export default ProductItems