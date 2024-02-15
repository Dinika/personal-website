export const detailsById = {
    '38': {
        name: 'Microsquad',
        description: `A VR game designed to teach physics to young kids.`,
        key_roles: [
            `Developing a mobile client for the game that acts as a joystick for remote players.`,
            `Design a 3d joystick in blender.`,
        ],
        resource_links: [
            {
                label: 'Source Code',
                link: 'https://github.com/CMCRobotics/microsquad'
            }
        ],
        technologies: ['AFrame', 'Webpack', 'Blender']
    },
    '37': {
        name: 'Webm to Mp4',
        description: `Primarily designed for centos based operating systems, this is a shell script that can be executed through the context menu in file explorer, aka nautilus,
        or through the command line. I wrote it to quickly convert webm videos (default for gnome screencast recorder) which does not play on Mac devices
        to mp4 format.`,
        resource_links: [
            {
                label: 'Source Code',
                link: 'https://github.com/Dinika/convert-webm-to-mp4'
            }
        ],
        technologies: ['Bash']
    },
    '36': {
        name: 'Image Annotate',
        description: `A cross platform desktop application that provides simple image editting. The default gnome screenshot application does not allow me to scribble on the screenshot - a feature
        I often use when writing wikis, so I developed this application.`,
        resource_links: [
            {
                label: 'Source Code',
                link: 'https://github.com/Dinika/image-annotate'
            }
        ],
        technologies: ['Tauri', 'JavaScript', 'Rust', 'Canvas']
    },
    '35': {
        name: 'Delta',
        key_roles: [
            `Reduced storage demands of blazegraph instances in production from 175GB to 38GB by trimming journal to only include relevant event information.`,
            `Contributed towards development of features that allowed users to download large resources using their ids.`,
        ],
        resource_links: [

        ],
        technologies: ['Scala', 'Cats Effect', 'ElasticSearch', 'Blazegraph', 'Kubernetes']
    },
    '34': {
        name: 'Fusion',
        key_roles: [
            `Developed a tool that queries ES documents to help scientists quickly load and find discrepancies in 100k+ resources.`,
            `Developed "shopping cart" to allow users to bulk download data resources from different parts of the applications.`,
            `Enabled easier transition of the project into maintainence phase by building the infrastructure for e2e testing and monitoring of the application. 
                This enabled the organisation to spend less than 20% of original resources on fusion thereby allowing efficient development of another high stake application (Open Brain Platform).`,
        ],
        resource_links: [
            {
                label: 'Source Code',
                link: 'https://github.com/BlueBrain/nexus-web'
            },
            {
                label: 'Public Studios',
                link: 'https://bbp.epfl.ch/nexus/web/studios'
            },
            {
                label: 'Web Application',
                link: 'https://bbp.epfl.ch/nexus/web/'
            },
        ],
        technologies: ['React', 'React Query', 'Jest', 'Vitest', 'ElasticSearch', 'Sentry', 'Github Actions', 'Cypress', 'Redux', 'Kubernetes']
    },
    '33': {
        name: 'Open Brain Platform',
        key_roles: [
            `Lead the development of "Virtual lab" (a feature similar to "repositories" in GitLab/Github) on the client side that allows users to collaborate on neuroscience datasets.`,
            `Developed the chat feature on the client that leverages OpenApi to allow users to ask and share neuroscience questions.`,
            `Improved API response times by nearly 95% by implementing caching on client and server sides`,
            `Introduced component based unit testing within the team.`
        ],
        resource_links: [
            {
                label: 'Web application',
                link: 'https://open-brain-platform.org/home'
            },
        ],
        technologies: ['React', 'Next', 'Jotai', 'Jest', 'FastAPI', 'ElasticSearch', 'Testing Library']
    },
    '32': {
        name: 'WRAP',
        key_roles: [
            `Built a system for streaming messages from devices at LHC to
                browsers to allow creation of dashboards with over a 100
                simultaneous subscriptions using websockets, and RxJS.`,
            `Developed feature to allow users to run (moderated) custom scripts to update dashboards inside a web workers.`,
            `Added a "grouping" functionality to the dashboards that facilitated users to group and bulk update widgets.`,
            `Setup the architecture to run end to end tests using cypress on local, development, and production environments.`
        ],
        resource_links: [
            {
                label: 'Simplified demo of running custom scripts in web workers',
                link: 'https://dinika.github.io/web-worker-demo/'
            }
        ],
        technologies: ['Angular 10+', 'Spring', 'MySQL', 'RxJS', 'Java', 'JavaScript', 'Cypress', 'Jasmine', 'JUnit', 'Jenkins', 'Ansible', 'Web Workers', 'WebSockets', 'STOMP']
    },
    '31': {
        name: 'HelpAlarm',
        key_roles: [
            `Improved performance of the application during situations of
                alarm avalanches at CERN. With the improvements, the app was able
                to process and render more than 100k alarms in ~35 seconds
                compared to 10k alarms in ~6 hours. Memory usage was also improved by 81%.`,
            `Developed proof of concept to make the same physical instance of application accessible from outside and within CERN using HaProxy`,
            `Added pagination and enabled searching results with the use of wildcard characters for reg exp like search`,
            `Primary maintainer of the repository, responsible for development and fixing bugs.`
        ],
        resource_links: [
        ],
        technologies: ['Vue', 'Spring', 'MySQL', 'Java', 'JavaScript', 'JUnit', 'GitlabCI', 'Pupeeteer', 'HaProxy', 'WebSockets']
    },
    '30': {
        name: 'ACW',
        key_roles: [
            `Extended the table component by providing capabilities for custom filtering, sorting, styling etc.`,
            `Added resuable service to manage shortcuts in all applications and displaying a cheat sheet for them`,
            `Added git hooks for linting, formatting, checking the branch name is consistent with project rules`,
            `Updated library from version 8 of Angular to version 10`
        ],
        resource_links: [
        ],
        technologies: ['Angular', 'Java', 'JavaScript', 'Git']
    },
    '29': {
        name: 'TI Logbook',
        key_roles: [
            `As the technical lead of the team one of my main responsibilites was to plan project milestones and communicate them to our stakeholders, organize development work
             within the team, and design the architecture for the application.`,
            `Design solutions for limited offline use of critical features such as managing work orders in "under maintainence" areas.`,
            `Planned and contributed to the migration of the application from AngularJS and php to Angular 13 and Java within 4 months.`,
            `Developed infrastructure for CI/CD for the application.`,
        ],
        resource_links: [],
        technologies: ['Java', 'Angular', 'Spring', 'Gitlab CI', 'nginx', 'php']
    }
}