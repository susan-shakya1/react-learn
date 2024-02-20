export function Projects() {
  const ProjectCount = [1, 2, 3, 4, 5, 6];
  return (
    <div className="text-center text-3xl text-orange-400 h-screen mt-[120px]">
      {ProjectCount.map((count) => {
        return <div>projectsCount No: {count}</div>;
      })}
    </div>
  );
}
