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
        keywords {
          items {
            keyword {
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
      }
      nextToken
    }
  }
`;
