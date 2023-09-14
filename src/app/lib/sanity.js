import { createClient } from "next-sanity"

const projectId = `9prc89n2`
const dataset = 'production'
const apiVersion = '2023-08-28'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});


// PROJECT LIST SECTION
export async function getAllCustomHomeBuilds() {
    const events = await client.fetch(`*[_type == "projects" && type == "customHomeBuild"]`)
    return events
}

export async function getAllRemodels() {
    const events = await client.fetch(`*[_type == "projects" && type == "remodel"]`)
    return events
}

// PROJECT LIST SECTION

// gets individual event by the slug or url
export async function getEventBySlug(slug) {
    const events = await client.fetch(`*[_type == "projects" && slug.current == "${slug}"]`)
    return events[0]
}


// ONLY FOR GETSTATICPATHS
export async function getPaths() {
    const paths = await client.fetch(
      `*[_type == "projects" && defined(slug.current)][].slug.current`
    )
    return paths
}


// TEAM MEMBER SECTION
export async function getAllTeamMembers() {
    const members = await client.fetch(`*[_type == "team"]`)
    return members
}

// TEAM MEMBER SECTION

// Testimonial SECTION
export async function getAllTestimonials() {
    const testimonials = await client.fetch(`*[_type == "testimonials"]`)
    return testimonials
}

// Testimonial SECTION


// Home Page
export async function getHomePage() {
    const homepage = await client.fetch(`*[_type == "home"][0]`)
    return homepage
}

// Home Page

// About Page
export async function getAboutPage() {
    const aboutPage = await client.fetch(`*[_type == "about"][0]`)
    return aboutPage
}

// About Page

// Process Page
export async function getProcessPage() {
    const processPage = await client.fetch(`*[_type == "process"][0]`)
    return processPage
}

export async function getProcesses() {
    const processes = await client.fetch(`*[_type == "processes"]`)
    return processes
}

// Process Page

// Custom Home Builds Page
export async function getCustomHomeBuildsPage() {
    const customHomesPage = await client.fetch(`*[_type == "customHomeBuilds"][0]`)
    return customHomesPage
}

// Custom Home Builds Page

// Remodels Page
export async function getRemodelsPage() {
    const remodelsPage = await client.fetch(`*[_type == "remodels"][0]`)
    return remodelsPage
}

// Remodels Page