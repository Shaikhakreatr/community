import { useRouter } from 'next/router';
import CareersMainContent from '@/components/careers-description/CareersMainContent';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const CareerDetails = ({ careerData, error }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!careerData) {
    return <div>Career not found</div>;
  }

  return (
    <main className='pt-[6.25rem] bg-img'>
      <Header />
      <CareersMainContent careerData={careerData} />
      <Footer />
    </main>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch('https://pcfja54uwi.execute-api.ap-south-1.amazonaws.com/dev/career/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    const careerData = data.find(career => career.id === id);

    if (!careerData) {
      return { props: { error: { message: 'Career not found' } } };
    }

    return { props: { careerData } };
  } catch (error) {
    return { props: { error: { message: error.message } } };
  }
}

export default CareerDetails;
