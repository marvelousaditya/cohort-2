export default async function Ex({ params }: any) {
  const moduleId = (await params).ex;
  return <div>{JSON.stringify(moduleId)}</div>;
}
