SELECT    [id],
          [title],
          [userId],
          [details],
          [startDate],
          [endDate],
          [attendance],
          [venue]
FROM [dbo].[events]
WHERE [id] = @id
