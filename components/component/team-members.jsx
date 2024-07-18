import Link from "next/link";
import Image from "next/image";

const TeamMemberCard = ({ src, alt, name, role }) => (
  <div className="overflow-hidden group">
    <Link href="#" className="inset-0 z-10 " prefetch={false}>
      <span className="sr-only">View</span>
    </Link>
    <Image
      src={src}
      alt={alt}
      width={519}
      height={600}
      className="object-cover w-full aspect-[519/600]"
    />
    <div className="mt-2">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  </div>
);

export function TeamMembers() {
  const teamMembers = [
    {
      src: "https://images.seattletimes.com/wp-content/uploads/2022/01/01202022_chinatown02_174653.jpg?d=780x540",
      alt: "Team Member 1",
      name: "Jane Smith",
      role: "Lead Designer",
    },
    {
      src: "https://images.seattletimes.com/wp-content/uploads/2022/01/01202022_chinatown02_174653.jpg?d=780x540",
      alt: "Team Member 2",
      name: "Michael Johnson",
      role: "Senior Engineer",
    },
    {
      src: "https://images.seattletimes.com/wp-content/uploads/2022/01/01202022_chinatown02_174653.jpg?d=780x540",
      alt: "Team Member 3",
      name: "Sarah Lee",
      role: "Marketing Manager",
    },
    {
      src: "https://images.seattletimes.com/wp-content/uploads/2022/01/01202022_chinatown02_174653.jpg?d=780x540",
      alt: "Team Member 4",
      name: "David Kim",
      role: "Product Manager",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="grid gap-12 ">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div className="relative overflow-hidden shadow">
            <Image
              src="https://images.seattletimes.com/wp-content/uploads/2022/01/01202022_chinatown02_174653.jpg?d=780x540"
              alt='image'
              width={519}
              height={600}
              className="object-cover w-full aspect-[519/600]"
            />
          </div>
          <div className="mx-1 space-y-4 ">
            <div className="inline-block ml-1 text-sm font-medium">
              Founder &amp; CEO
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              John Doe
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              John is the founder and CEO of our company. He has over 15 years
              of experience in the industry and is passionate about building
              innovative products.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              src={member.src}
              alt={member.alt}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
