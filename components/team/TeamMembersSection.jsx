import { getAllTeamMembers } from "@/src/app/lib/sanity";
import TextInfo from "../layout/sub-sections/TextInfo"
import TeamMember from "./TeamMember"

export default function TeamMembersSection(props) {
    const {members, tag, header, paragraph} = props

    return (
        <div className="font-montserrat mt-16">
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
              <ul className="flex flex-wrap list-none mx-14  w-auto lg:mx-12">
                {
                  members.map((member) => (
                      <TeamMember
                      key={member._id}
                      image={member.profilePicture}
                      name={member.memberName}
                      jobTitle={member.memberPosition}
                      />
                  ))}
              </ul>
            </div>
        </div>
    )
}

