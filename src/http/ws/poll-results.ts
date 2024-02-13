import z from 'zod';
import { FastifyInstance } from 'fastify';
import { voting } from '../../utils/voting-pub-sub';

export async function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results', { websocket: true }, (connection, req) => {
    const getPollParams = z.object({
      pollId: z.string(),
    });

    const { pollId } = getPollParams.parse(req.params);

    voting.subscribe(pollId, (message) => {
      connection.socket.send(JSON.stringify(message));
    })
  })
}