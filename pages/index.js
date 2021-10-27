import Head from 'next/head';
// import Image from 'next/image';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Playhouse Media Group - Home</title>
				<meta
					name='description'
					content='Playhouse Media Group Is An Award-Winning Digital Marketing Agency. We offer your Business the chance to build a Successful Digital Marketing Strategy'
				/>
				<link rel='canonical' href='https://www.playhousemedia.net' />
				<meta property='og:locale' content='en_US' />
				<meta property='og:type' content='website' />
				<meta
					property='og:title'
					content='Playhouse Media Group - Digital Marketing Agency'
				/>
				<meta
					property='og:description'
					content='Playhouse Media Group takes pride in having worked with and advised many Business Start-Ups, Entrepreneurs, and Established Businesses Globally on their Strategic Marketing Initiatives. We welcome the opportunity to offer your Business the chance to build a successful Marketing Strategy to better dominate your market segment quickly and effectively.'
				/>
				<meta property='og:url' content='https://www.playhousemedia.net' />
				<meta
					property='og:site_name'
					content='Playhouse Media Group Digital Marketing Agency'
				/>
				<meta
					property='article:publisher'
					content='https://www.facebook.com/playhousemediagroup/'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<ComingSoon />
			<Footer />
		</div>
	);
}
