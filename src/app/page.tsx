import BadComponent from '@/components/BadComponent';
import GoodComponent from '@/components/GoodComponent';

export default function Home() {
  return (
    <main>
      <h1>CI/CD Practice - Test Components</h1>
      <GoodComponent />
      <BadComponent />
    </main>
  );
}
