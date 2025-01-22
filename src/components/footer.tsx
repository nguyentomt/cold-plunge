const Footer = () => {

    return (
        <section id="footer" className="w-full flex justify-center">
            <div className="w-full md:w-3/5 flex gap-6 pl-24 bg-slate-800 bg-opacity-50 md:pl-0 flex-col blurry md:flex-row justify-center align-center md:justify-around py-8">

                <article className="flex-col">
                    <p className="pb-4 text-xl">Meta Labs</p>
                    <div className="text-sm leading-loose">
                    16882 Gothard St Unit B,<br/>
                    Huntington Beach, CA 92647<br/>
                    714 658 6379

                    </div>
                </article>

                <article className="flex-col">
                    <p className="pb-4 text-xl">Hours</p>
                    <div className="text-sm leading-loose">
                        Closed Mondays<br/>
                        9:00am - 7pm Tues-Fri<br/>
                        9:00am - 5pm Weekends
                    </div>
                </article>

                <article className="flex-col">
                    <p className="pb-4  text-xl">Social</p>
                    <div className="text-sm leading-loose">
                        <a href="https://www.instagram.com/meta.labs.coldplunge/" target="new">Instagram</a><br/>
                        <a href="https://www.yelp.com/biz/meta-labs-cold-plunge-huntington-beach" target="new">Yelp</a><br/>
                        <a href="https://search.google.com/local/reviews?placeid=ChIJeWDMjeMn3YARCLH5KIm65Ts&q=Meta+Labs+Cold+Plunge&hl=en&gl=US" target="new">Google</a>
                    </div>
                </article>
            </div>
            

        </section>
    )
}

export default Footer;