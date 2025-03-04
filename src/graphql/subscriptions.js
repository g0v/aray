/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      label
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      label
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      label
      description
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateContribution = /* GraphQL */ `
  subscription OnCreateContribution {
    onCreateContribution {
      id
      username
      projectId
      projectTaskId
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateContribution = /* GraphQL */ `
  subscription OnUpdateContribution {
    onUpdateContribution {
      id
      username
      projectId
      projectTaskId
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteContribution = /* GraphQL */ `
  subscription OnDeleteContribution {
    onDeleteContribution {
      id
      username
      projectId
      projectTaskId
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($hosts: String) {
    onCreateEvent(hosts: $hosts) {
      id
      projectId
      name
      type
      description
      startDate
      endDate
      duration
      hosts
      annouceToContributors
      guestLimit
      attendanceCount
      rsvpQuestion
      rsvpLimit
      rsvpOpenTime
      rsvpCloseTime
      location
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($hosts: String) {
    onUpdateEvent(hosts: $hosts) {
      id
      projectId
      name
      type
      description
      startDate
      endDate
      duration
      hosts
      annouceToContributors
      guestLimit
      attendanceCount
      rsvpQuestion
      rsvpLimit
      rsvpOpenTime
      rsvpCloseTime
      location
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($hosts: String) {
    onDeleteEvent(hosts: $hosts) {
      id
      projectId
      name
      type
      description
      startDate
      endDate
      duration
      hosts
      annouceToContributors
      guestLimit
      attendanceCount
      rsvpQuestion
      rsvpLimit
      rsvpOpenTime
      rsvpCloseTime
      location
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateEventAttendance = /* GraphQL */ `
  subscription OnCreateEventAttendance {
    onCreateEventAttendance {
      id
      eventId
      username
      status
      note
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateEventAttendance = /* GraphQL */ `
  subscription OnUpdateEventAttendance {
    onUpdateEventAttendance {
      id
      eventId
      username
      status
      note
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteEventAttendance = /* GraphQL */ `
  subscription OnDeleteEventAttendance {
    onDeleteEventAttendance {
      id
      eventId
      username
      status
      note
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateEventProject = /* GraphQL */ `
  subscription OnCreateEventProject {
    onCreateEventProject {
      id
      eventId
      projectId
      status
      title
      description
      links {
        name
        description
        url
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
      event {
        id
        projectId
        name
        type
        description
        startDate
        endDate
        duration
        hosts
        annouceToContributors
        guestLimit
        attendanceCount
        rsvpQuestion
        rsvpLimit
        rsvpOpenTime
        rsvpCloseTime
        location
        link
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateEventProject = /* GraphQL */ `
  subscription OnUpdateEventProject {
    onUpdateEventProject {
      id
      eventId
      projectId
      status
      title
      description
      links {
        name
        description
        url
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
      event {
        id
        projectId
        name
        type
        description
        startDate
        endDate
        duration
        hosts
        annouceToContributors
        guestLimit
        attendanceCount
        rsvpQuestion
        rsvpLimit
        rsvpOpenTime
        rsvpCloseTime
        location
        link
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteEventProject = /* GraphQL */ `
  subscription OnDeleteEventProject {
    onDeleteEventProject {
      id
      eventId
      projectId
      status
      title
      description
      links {
        name
        description
        url
      }
      createdAt
      createdBy
      updatedAt
      updatedBy
      event {
        id
        projectId
        name
        type
        description
        startDate
        endDate
        duration
        hosts
        annouceToContributors
        guestLimit
        attendanceCount
        rsvpQuestion
        rsvpLimit
        rsvpOpenTime
        rsvpCloseTime
        location
        link
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateGovernmentAgency = /* GraphQL */ `
  subscription OnCreateGovernmentAgency {
    onCreateGovernmentAgency {
      id
      label
      description
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateGovernmentAgency = /* GraphQL */ `
  subscription OnUpdateGovernmentAgency {
    onUpdateGovernmentAgency {
      id
      label
      description
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteGovernmentAgency = /* GraphQL */ `
  subscription OnDeleteGovernmentAgency {
    onDeleteGovernmentAgency {
      id
      label
      description
      link
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateNeed = /* GraphQL */ `
  subscription OnCreateNeed {
    onCreateNeed {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateNeed = /* GraphQL */ `
  subscription OnUpdateNeed {
    onUpdateNeed {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteNeed = /* GraphQL */ `
  subscription OnDeleteNeed {
    onDeleteNeed {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String, $managers: String) {
    onCreateProject(owner: $owner, managers: $managers) {
      id
      status
      owner
      managers
      name
      altName
      summary
      description
      intros {
        languageCode
        name
        altName
        summary
        description
      }
      slackChannel
      slackChannelUrl
      links {
        name
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      events {
        items {
          id
          eventId
          projectId
          status
          title
          description
          links {
            name
            description
            url
          }
          createdAt
          createdBy
          updatedAt
          updatedBy
          event {
            id
            projectId
            name
            type
            description
            startDate
            endDate
            duration
            hosts
            annouceToContributors
            guestLimit
            attendanceCount
            rsvpQuestion
            rsvpLimit
            rsvpOpenTime
            rsvpCloseTime
            location
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      categorys {
        items {
          id
          projectId
          categoryId
          createdAt
          createdBy
          updatedAt
          updatedBy
          category {
            id
            label
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      governmentAgencies {
        items {
          id
          projectId
          governmentAgencyId
          createdAt
          createdBy
          updatedAt
          updatedBy
          governmentAgency {
            id
            label
            description
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      contributors {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String, $managers: String) {
    onUpdateProject(owner: $owner, managers: $managers) {
      id
      status
      owner
      managers
      name
      altName
      summary
      description
      intros {
        languageCode
        name
        altName
        summary
        description
      }
      slackChannel
      slackChannelUrl
      links {
        name
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      events {
        items {
          id
          eventId
          projectId
          status
          title
          description
          links {
            name
            description
            url
          }
          createdAt
          createdBy
          updatedAt
          updatedBy
          event {
            id
            projectId
            name
            type
            description
            startDate
            endDate
            duration
            hosts
            annouceToContributors
            guestLimit
            attendanceCount
            rsvpQuestion
            rsvpLimit
            rsvpOpenTime
            rsvpCloseTime
            location
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      categorys {
        items {
          id
          projectId
          categoryId
          createdAt
          createdBy
          updatedAt
          updatedBy
          category {
            id
            label
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      governmentAgencies {
        items {
          id
          projectId
          governmentAgencyId
          createdAt
          createdBy
          updatedAt
          updatedBy
          governmentAgency {
            id
            label
            description
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      contributors {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String, $managers: String) {
    onDeleteProject(owner: $owner, managers: $managers) {
      id
      status
      owner
      managers
      name
      altName
      summary
      description
      intros {
        languageCode
        name
        altName
        summary
        description
      }
      slackChannel
      slackChannelUrl
      links {
        name
        description
        url
      }
      totalCompletedHours
      totalCompletedTasks
      totalContributors
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      events {
        items {
          id
          eventId
          projectId
          status
          title
          description
          links {
            name
            description
            url
          }
          createdAt
          createdBy
          updatedAt
          updatedBy
          event {
            id
            projectId
            name
            type
            description
            startDate
            endDate
            duration
            hosts
            annouceToContributors
            guestLimit
            attendanceCount
            rsvpQuestion
            rsvpLimit
            rsvpOpenTime
            rsvpCloseTime
            location
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      categorys {
        items {
          id
          projectId
          categoryId
          createdAt
          createdBy
          updatedAt
          updatedBy
          category {
            id
            label
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      governmentAgencies {
        items {
          id
          projectId
          governmentAgencyId
          createdAt
          createdBy
          updatedAt
          updatedBy
          governmentAgency {
            id
            label
            description
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          projectId
          needId
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          projectId
          tagId
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      contributors {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateProjectCategory = /* GraphQL */ `
  subscription OnCreateProjectCategory {
    onCreateProjectCategory {
      id
      projectId
      categoryId
      createdAt
      createdBy
      updatedAt
      updatedBy
      category {
        id
        label
        description
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateProjectCategory = /* GraphQL */ `
  subscription OnUpdateProjectCategory {
    onUpdateProjectCategory {
      id
      projectId
      categoryId
      createdAt
      createdBy
      updatedAt
      updatedBy
      category {
        id
        label
        description
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteProjectCategory = /* GraphQL */ `
  subscription OnDeleteProjectCategory {
    onDeleteProjectCategory {
      id
      projectId
      categoryId
      createdAt
      createdBy
      updatedAt
      updatedBy
      category {
        id
        label
        description
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateProjectGovernmentAgency = /* GraphQL */ `
  subscription OnCreateProjectGovernmentAgency {
    onCreateProjectGovernmentAgency {
      id
      projectId
      governmentAgencyId
      createdAt
      createdBy
      updatedAt
      updatedBy
      governmentAgency {
        id
        label
        description
        link
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateProjectGovernmentAgency = /* GraphQL */ `
  subscription OnUpdateProjectGovernmentAgency {
    onUpdateProjectGovernmentAgency {
      id
      projectId
      governmentAgencyId
      createdAt
      createdBy
      updatedAt
      updatedBy
      governmentAgency {
        id
        label
        description
        link
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteProjectGovernmentAgency = /* GraphQL */ `
  subscription OnDeleteProjectGovernmentAgency {
    onDeleteProjectGovernmentAgency {
      id
      projectId
      governmentAgencyId
      createdAt
      createdBy
      updatedAt
      updatedBy
      governmentAgency {
        id
        label
        description
        link
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateProjectNeed = /* GraphQL */ `
  subscription OnCreateProjectNeed {
    onCreateProjectNeed {
      id
      projectId
      needId
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateProjectNeed = /* GraphQL */ `
  subscription OnUpdateProjectNeed {
    onUpdateProjectNeed {
      id
      projectId
      needId
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteProjectNeed = /* GraphQL */ `
  subscription OnDeleteProjectNeed {
    onDeleteProjectNeed {
      id
      projectId
      needId
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateProjectTag = /* GraphQL */ `
  subscription OnCreateProjectTag {
    onCreateProjectTag {
      id
      projectId
      tagId
      createdAt
      createdBy
      updatedAt
      updatedBy
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
    }
  }
`;
export const onUpdateProjectTag = /* GraphQL */ `
  subscription OnUpdateProjectTag {
    onUpdateProjectTag {
      id
      projectId
      tagId
      createdAt
      createdBy
      updatedAt
      updatedBy
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
    }
  }
`;
export const onDeleteProjectTag = /* GraphQL */ `
  subscription OnDeleteProjectTag {
    onDeleteProjectTag {
      id
      projectId
      tagId
      createdAt
      createdBy
      updatedAt
      updatedBy
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
    }
  }
`;
export const onCreateProjectTask = /* GraphQL */ `
  subscription OnCreateProjectTask {
    onCreateProjectTask {
      id
      projectId
      status
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateProjectTask = /* GraphQL */ `
  subscription OnUpdateProjectTask {
    onUpdateProjectTask {
      id
      projectId
      status
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteProjectTask = /* GraphQL */ `
  subscription OnDeleteProjectTask {
    onDeleteProjectTask {
      id
      projectId
      status
      summary
      description
      hours
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateStatement = /* GraphQL */ `
  subscription OnCreateStatement {
    onCreateStatement {
      id
      username
      type
      date
      totalCompletedHours
      totalCompletedTasks
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateStatement = /* GraphQL */ `
  subscription OnUpdateStatement {
    onUpdateStatement {
      id
      username
      type
      date
      totalCompletedHours
      totalCompletedTasks
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteStatement = /* GraphQL */ `
  subscription OnDeleteStatement {
    onDeleteStatement {
      id
      username
      type
      date
      totalCompletedHours
      totalCompletedTasks
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      label
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
      username
      status
      name
      email
      selfIntroduction
      location
      timeZone
      slackId
      slackIdUrl
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      events {
        items {
          id
          eventId
          projectId
          status
          title
          description
          links {
            name
            description
            url
          }
          createdAt
          createdBy
          updatedAt
          updatedBy
          event {
            id
            projectId
            name
            type
            description
            startDate
            endDate
            duration
            hosts
            annouceToContributors
            guestLimit
            attendanceCount
            rsvpQuestion
            rsvpLimit
            rsvpOpenTime
            rsvpCloseTime
            location
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          needId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      projects {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          tagId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
      username
      status
      name
      email
      selfIntroduction
      location
      timeZone
      slackId
      slackIdUrl
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      events {
        items {
          id
          eventId
          projectId
          status
          title
          description
          links {
            name
            description
            url
          }
          createdAt
          createdBy
          updatedAt
          updatedBy
          event {
            id
            projectId
            name
            type
            description
            startDate
            endDate
            duration
            hosts
            annouceToContributors
            guestLimit
            attendanceCount
            rsvpQuestion
            rsvpLimit
            rsvpOpenTime
            rsvpCloseTime
            location
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          needId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      projects {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          tagId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
      username
      status
      name
      email
      selfIntroduction
      location
      timeZone
      slackId
      slackIdUrl
      urlWebsite
      urlGithub
      urlLinkedIn
      urlFacebook
      urlTwitter
      urlInstagram
      totalCompletedHours
      totalCompletedTasks
      avatarS3Key
      createdAt
      createdBy
      updatedAt
      updatedBy
      events {
        items {
          id
          eventId
          projectId
          status
          title
          description
          links {
            name
            description
            url
          }
          createdAt
          createdBy
          updatedAt
          updatedBy
          event {
            id
            projectId
            name
            type
            description
            startDate
            endDate
            duration
            hosts
            annouceToContributors
            guestLimit
            attendanceCount
            rsvpQuestion
            rsvpLimit
            rsvpOpenTime
            rsvpCloseTime
            location
            link
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      needs {
        items {
          id
          needId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          need {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      projects {
        items {
          id
          projectId
          username
          role
          completedHours
          completedTasks
          createdAt
          createdBy
          updatedAt
          updatedBy
          project {
            id
            status
            owner
            managers
            name
            altName
            summary
            description
            slackChannel
            slackChannelUrl
            totalCompletedHours
            totalCompletedTasks
            totalContributors
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
      tags {
        items {
          id
          tagId
          username
          createdAt
          createdBy
          updatedAt
          updatedBy
          tag {
            id
            label
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          user {
            username
            status
            name
            email
            selfIntroduction
            location
            timeZone
            slackId
            slackIdUrl
            urlWebsite
            urlGithub
            urlLinkedIn
            urlFacebook
            urlTwitter
            urlInstagram
            totalCompletedHours
            totalCompletedTasks
            avatarS3Key
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
        }
        nextToken
      }
    }
  }
`;
export const onCreateUserNeed = /* GraphQL */ `
  subscription OnCreateUserNeed {
    onCreateUserNeed {
      id
      needId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUserNeed = /* GraphQL */ `
  subscription OnUpdateUserNeed {
    onUpdateUserNeed {
      id
      needId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUserNeed = /* GraphQL */ `
  subscription OnDeleteUserNeed {
    onDeleteUserNeed {
      id
      needId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      need {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateUserProject = /* GraphQL */ `
  subscription OnCreateUserProject {
    onCreateUserProject {
      id
      projectId
      username
      role
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUserProject = /* GraphQL */ `
  subscription OnUpdateUserProject {
    onUpdateUserProject {
      id
      projectId
      username
      role
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUserProject = /* GraphQL */ `
  subscription OnDeleteUserProject {
    onDeleteUserProject {
      id
      projectId
      username
      role
      completedHours
      completedTasks
      createdAt
      createdBy
      updatedAt
      updatedBy
      project {
        id
        status
        owner
        managers
        name
        altName
        summary
        description
        intros {
          languageCode
          name
          altName
          summary
          description
        }
        slackChannel
        slackChannelUrl
        links {
          name
          description
          url
        }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        categorys {
          items {
            id
            projectId
            categoryId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        governmentAgencies {
          items {
            id
            projectId
            governmentAgencyId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            projectId
            needId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            projectId
            tagId
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        contributors {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onCreateUserTag = /* GraphQL */ `
  subscription OnCreateUserTag {
    onCreateUserTag {
      id
      tagId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUserTag = /* GraphQL */ `
  subscription OnUpdateUserTag {
    onUpdateUserTag {
      id
      tagId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUserTag = /* GraphQL */ `
  subscription OnDeleteUserTag {
    onDeleteUserTag {
      id
      tagId
      username
      createdAt
      createdBy
      updatedAt
      updatedBy
      tag {
        id
        label
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      user {
        username
        status
        name
        email
        selfIntroduction
        location
        timeZone
        slackId
        slackIdUrl
        urlWebsite
        urlGithub
        urlLinkedIn
        urlFacebook
        urlTwitter
        urlInstagram
        totalCompletedHours
        totalCompletedTasks
        avatarS3Key
        createdAt
        createdBy
        updatedAt
        updatedBy
        events {
          items {
            id
            eventId
            projectId
            status
            title
            description
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        needs {
          items {
            id
            needId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        projects {
          items {
            id
            projectId
            username
            role
            completedHours
            completedTasks
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
        tags {
          items {
            id
            tagId
            username
            createdAt
            createdBy
            updatedAt
            updatedBy
          }
          nextToken
        }
      }
    }
  }
`;
