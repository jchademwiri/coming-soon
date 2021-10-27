import {
	FaFacebook,
	FaYoutube,
	FaWhatsapp,
	FaLinkedin,
	FaEnvelope
} from 'react-icons/fa';
import styles from './ComingSoon.module.scss';

export default function ComingSoon() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.description}>
					<p>This Domain Has been Regitered with Playhouse Media Group</p>
					<h2>Need a Website? Contact us Now</h2>
				</div>
				<div className={styles.grid}>
					<a
						href='mailto:info@playhousemedia.net?subject=I need one of your services&body=Good Day, Jacob. We need you to ... '
						target='_blank'
						rel='noreferrer'
						className={styles.card}>
						<h2 className={styles.icons}>
							<FaEnvelope className={`${styles.icon} ${styles.email}`} />
							Email
						</h2>
						<p>info@playhousemedia.net</p>
					</a>

					<a
						href='https://wa.me/message/B5YXATOYPZKCJ1'
						target='_blank'
						rel='noreferrer'
						className={styles.card}>
						<h2 className={styles.icons}>
							<FaWhatsapp className={`${styles.icon} ${styles.whatsapp}`} />
							WhatsApp / Call
						</h2>
						<p>+27 61 691 1656</p>
					</a>

					<a
						href='https://www.facebook.com/playhousemediatech/'
						target='_blank'
						rel='noreferrer'
						className={styles.card}>
						<h2 className={styles.icons}>
							<FaFacebook className={`${styles.icon} ${styles.facebook}`} />
							Facebook
						</h2>
						<p>Like Us on Facebook</p>
					</a>

					<a
						href='https://www.youtube.com/channel/UCgnCtM2Ih8L5xNXXpBREmEg?sub_confirmation=1'
						target='_blank'
						rel='noreferrer'
						className={styles.card}>
						<h2 className={styles.icons}>
							<FaYoutube className={`${styles.icon} ${styles.youtube}`} />
							YouTube
						</h2>
						<p>Subscribe to our YouTube Channel.</p>
					</a>
				</div>
			</main>
		</div>
	);
}
