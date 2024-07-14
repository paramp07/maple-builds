import { getAllTeamMembers } from "@/src/app/lib/sanity";

import TeamMember from "./TeamMember"

export default function TeamMembersSection(props) {
    const {members, tag, header, paragraph} = props

    return (
        <div className="mt-16 font-montserrat">
            <TextInfo subtitle={tag} heading={header}>
                {paragraph}
            </TextInfo>
            <div class="main max-w-[1400px] my-0 mx-auto">
              {/* <ul class="cards flex flex-wrap list-none m-0 p-0">
                {
                members.map((member) => (
                    <TeamMember
                    key={member._id}
                    image={member.profilePicture}
                    name={member.memberName}
                    jobTitle={member.memberPosition}
                    />
                ))}
              </ul> */}
              <ul className="flex flex-wrap w-auto list-none mx-14 lg:mx-12">
                {
                  members.map((member) => (
                      <TeamMember
                      key={member._id}
                      image={member.profilePicture}
                      name={member.memberName}
                      jobTitle={member.memberPosition}
                      description={member.description}
                      />
                  ))}
              </ul>
            </div>
        </div>
    )
}

