import FeaturesList from "@/features/practice/components/features-list/FeaturesList";

const DemoPage = () => {
  return (
    <section className="h-full w-full">
      <div className="container min-h-[80vh] mx-auto">
        <h1 className="inline-block mx-auto text-3xl">Features</h1>
        <FeaturesList />
      </div>
    </section>
  );
}

export default DemoPage;