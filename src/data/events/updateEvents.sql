UPDATE [dbo].[events]
SET [title] = @title,
     [details] = @details,
     [startDate] = @startDate,
     [endDate] = @endDate,
     [attendance] = @attendance,
     [venue] = @venue
WHERE [id] = @id

SELECT    [id],
          [title],
          [details],
          [startDate],
          [endDate],
          [attendance],
          [venue]
FROM [dbo].[events]
WHERE [id] = @id