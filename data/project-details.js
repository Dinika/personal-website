export const detailsById = {
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
    }
}