import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY);

//export async function POST( ) {
    //resend.emails.send({
        //from: 'the domain',
        //to: "the email we want to send to"
        //subject: "",
        //react: <WelcomeTemplate name="Javad" />
    //})
    //return NextResponse.json({});
//}