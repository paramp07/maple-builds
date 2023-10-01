import Form from '@/components/form/Form'
import OldForm from '@/components/form/OLDFORM'
import TextInfo from '@/components/layout/sub-sections/TextInfo'
import { NextSeo } from 'next-seo'

export default function ContactPage() {
    const SEO = {
        title: 'Contact Us',
        description: 'Get in touch with us',
    }
    return (
        <>
        <NextSeo {...SEO} />
        <div className='flex flex-col items-center'>
            <TextInfo
            subtitle='Get in contact'
            heading="Fill out the form below and we'll be in touch shortly."
            />
            <OldForm />
        </div>
        </>
    )
}