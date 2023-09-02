import Form from '@/components/form/Form'
import OldForm from '@/components/form/OLDFORM'
import TextInfo from '@/components/layout/sub-sections/TextInfo'

export default function ContactPage() {
    return (
        <div className='flex flex-col items-center'>
            <TextInfo
            subtitle='Get in contact'
            heading="Fill out the form below and we'll be in touch shortly."
            />
            <OldForm />
            {/* <Form /> */}
        </div>
    )
}