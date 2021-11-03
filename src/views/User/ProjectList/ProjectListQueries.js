export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        owner
        managers
        name
        summary
        description
        # links {
        #   name
        #   description
        #   url
        # }
        totalCompletedHours
        totalCompletedTasks
        totalContributors
        # createdAt
        # createdBy
        # updatedAt
        # updatedBy
        categorys {
          items {
            category {
              label
            }
          }
          nextToken
        }
        needs {
          items {
            need {
              label
            }
          }
          nextToken
        }
        tags {
          items {
            tag {
              label
            }
          }
          nextToken
        }
        governmentAgencies {
          items {
            governmentAgency {
              label
            }
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
